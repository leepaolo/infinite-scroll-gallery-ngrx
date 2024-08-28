import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FavoritePhotosComponent } from './favorite-photos.component';
import { FavoritesService } from '../service/favorites.service';
import { IGallery } from 'src/app/models/gallery.interface';
import { of } from 'rxjs';

describe('FavoritePhotosComponent', () => {
  let component: FavoritePhotosComponent;
  let fixture: ComponentFixture<FavoritePhotosComponent>;
  let favoritesService: FavoritesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritePhotosComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: FavoritesService,
          useValue: {
            getFavorites: jasmine
              .createSpy('getFavorites')
              .and.returnValue(of([])),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePhotosComponent);
    component = fixture.componentInstance;
    favoritesService = TestBed.inject(FavoritesService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the empty title when there are no favorite photos', () => {
    const emptyTitleElement =
      fixture.nativeElement.querySelector('.favorite-empty');
    expect(emptyTitleElement.textContent).toContain(component.emptyTitle);
  });

  it('should display the CTA title when there are no favorite photos', () => {
    const ctaTitleElement = fixture.nativeElement.querySelector('.cta-title');
    expect(ctaTitleElement.textContent).toContain(component.ctaTitle);
  });

  it('should fetch favorite photos on component initialization', () => {
    const favoritePhotos: IGallery[] = [
      { id: 1, photo: 'Photo 1', url: 'https://example.com/photo1.jpg' },
      { id: 2, photo: 'Photo 2', url: 'https://example.com/photo2.jpg' },
    ];
    (favoritesService.getFavorites as jasmine.Spy).and.returnValue(
      of(favoritePhotos)
    );

    component.ngOnInit();

    expect(component.favoritePhotos).toEqual(favoritePhotos);
  });

  it('should navigate to single photo view when a photo is clicked', () => {
    const photo: IGallery = {
      id: 1,
      photo: 'Photo 1',
      url: 'https://example.com/photo1.jpg',
    };
    spyOn(component['router'], 'navigate');

    component.openPhoto(photo);

    expect(component['router'].navigate).toHaveBeenCalledWith([
      '/photos',
      photo.id,
    ]);
  });

  it('should navigate to the gallery when "Navigate to Gallery" button is clicked', () => {
    spyOn(component['router'], 'navigate');

    component.navigateToGallery();

    expect(component['router'].navigate).toHaveBeenCalledWith([
      '/photo-gallery',
    ]);
  });
});
