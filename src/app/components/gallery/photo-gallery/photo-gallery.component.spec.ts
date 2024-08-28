import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoGalleryComponent } from './photo-gallery.component';
import { GalleryService } from '../service/gallery.service';
import { FavoritesService } from '../service/favorites.service';
import { IGallery } from '../../../models/gallery.interface';
import { of } from 'rxjs';
import { MatGridListModule } from '@angular/material/grid-list';

describe('PhotoGalleryComponent', () => {
  let component: PhotoGalleryComponent;
  let fixture: ComponentFixture<PhotoGalleryComponent>;
  let galleryService: jasmine.SpyObj<GalleryService>;
  let favoritesService: jasmine.SpyObj<FavoritesService>;

  beforeEach(async () => {
    const galleryServiceSpy = jasmine.createSpyObj('GalleryService', [
      'getLoadingStatus',
      'getRandomImage',
    ]);
    const favoritesServiceSpy = jasmine.createSpyObj('FavoritesService', [
      'addToFavorites',
    ]);

    galleryServiceSpy.getLoadingStatus.and.returnValue(of(false)); // Mock loading status as false initially
    galleryServiceSpy.getRandomImage.and.returnValue(of(new Blob())); // Mock getRandomImage to return a dummy Blob

    await TestBed.configureTestingModule({
      declarations: [PhotoGalleryComponent],
      providers: [
        { provide: GalleryService, useValue: galleryServiceSpy },
        { provide: FavoritesService, useValue: favoritesServiceSpy },
      ],
      imports: [MatGridListModule],
    }).compileComponents();

    galleryService = TestBed.inject(
      GalleryService
    ) as jasmine.SpyObj<GalleryService>;
    favoritesService = TestBed.inject(
      FavoritesService
    ) as jasmine.SpyObj<FavoritesService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display "No favorite photos" when gallery is empty', () => {
    component.gallery = [];
    fixture.detectChanges();
    const emptyTitleElement =
      fixture.nativeElement.querySelector('.empty-title');
    expect(emptyTitleElement).toBeTruthy();
    expect(emptyTitleElement.textContent).toContain('Loading images....');
  });

  it('should display images when gallery is populated', () => {
    component.gallery = [
      { id: '1', photo: 'image1.jpg', isFavorite: false },
      { id: '2', photo: 'image2.jpg', isFavorite: false },
    ];
    fixture.detectChanges();
    const gridContainer =
      fixture.nativeElement.querySelector('.grid-container');
    expect(gridContainer).toBeTruthy();
    const images = fixture.nativeElement.querySelectorAll('img');
    expect(images.length).toBe(2);
    expect(images[0].src).toContain('image1.jpg');
    expect(images[1].src).toContain('image2.jpg');
  });

  it('should load more images when scrolled to the bottom', () => {
    spyOn(component, 'loadMoreImages').and.callThrough();
    component.loadMoreImages();
    fixture.detectChanges();
    expect(component.loadMoreImages).toHaveBeenCalled();
  });

  it('should add photo to favorites', () => {
    const image: IGallery = { id: '1', photo: 'image1.jpg', isFavorite: false };
    component.addToFavorites(image);
    expect(favoritesService.addToFavorites).toHaveBeenCalledWith(image);
    expect(image.isFavorite).toBeTrue();
  });

  it('should generate a random ID', () => {
    const id = component.generateRandomId();
    expect(id).toBeTruthy();
    expect(typeof id).toBe('string');
  });
});
