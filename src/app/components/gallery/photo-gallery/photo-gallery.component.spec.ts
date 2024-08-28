import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoGalleryComponent } from './photo-gallery.component';
import { GalleryService } from '../service/gallery.service';
import { FavoritesService } from '../service/favorites.service';
import { IGallery } from '../../../models/gallery.interface';

describe('PhotoGalleryComponent', () => {
  let component: PhotoGalleryComponent;
  let fixture: ComponentFixture<PhotoGalleryComponent>;
  let galleryService: GalleryService;
  let favoritesService: FavoritesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoGalleryComponent],
      providers: [GalleryService, FavoritesService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGalleryComponent);
    component = fixture.componentInstance;
    galleryService = TestBed.inject(GalleryService);
    favoritesService = TestBed.inject(FavoritesService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize gallery and isLoading properties', () => {
    expect(component.gallery).toEqual([]);
    expect(component.isLoading).toBeFalse();
  });

  it('should load images when ngOnInit is called', () => {
    spyOn(component, 'loadImages');
    component.ngOnInit();
    expect(component.loadImages).toHaveBeenCalled();
  });

  it('should load more images when onScroll is triggered', () => {
    spyOn(component, 'loadMoreImages');
    component.onScroll();
    expect(component.loadMoreImages).toHaveBeenCalled();
  });

  it('should add photo to favorites when addToFavorites is called', () => {
    const image: IGallery = { id: '1', photo: 'Photo 1', url: 'photo1.jpg' };
    spyOn(favoritesService, 'addToFavorites');
    component.addToFavorites(image);
    expect(favoritesService.addToFavorites).toHaveBeenCalledWith(image);
  });

  it('should generate a random ID when generateRandomId is called', () => {
    const id = component.generateRandomId();
    expect(id).toBeTruthy();
    expect(typeof id).toBe('string');
  });
});
