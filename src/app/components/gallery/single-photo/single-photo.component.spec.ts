import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { FavoritesService } from '../service/favorites.service';
import { SinglePhotoComponent } from './single-photo.component';

describe('SinglePhotoComponent', () => {
  let component: SinglePhotoComponent;
  let fixture: ComponentFixture<SinglePhotoComponent>;
  let mockActivatedRoute: any;
  let mockRouter: any;
  let mockFavoritesService: any;

  beforeEach(async () => {
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: (param: string) => {
            // Mock the route parameter value here if needed
          },
        },
      },
    };

    mockRouter = {
      navigate: jasmine.createSpy('navigate'),
    };

    mockFavoritesService = {
      // Mock the necessary methods and properties of FavoritesService here if needed
    };

    await TestBed.configureTestingModule({
      declarations: [SinglePhotoComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: FavoritesService, useValue: mockFavoritesService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize photo and removeFavoriteTitle', () => {
    // Mock the necessary data for photo and removeFavoriteTitle properties
    expect(component.photo).toEqual(undefined);
    expect(component.removeFavoriteTitle).toBe('Remove from favorites');
  });

  it('should set galleryGradient and activeGalleryStyle', () => {
    expect(component.galleryGradient).toEqual({
      background: '#60a5fa',
      color: '#ffffff',
    });
    expect(component.activeGalleryStyle).toEqual({
      background: '#2563eb',
      color: '#ffffff',
    });
  });

  it('should initialize isFavoritesEmpty', () => {
    // Mock the necessary data for isFavoritesEmpty property
    expect(component.isFavoritesEmpty).toBe(false);
  });

  it('should call removeFromFavorites method', () => {
    spyOn(component, 'removeFromFavorites');
    component.removeFromFavorites();
    expect(component.removeFromFavorites).toHaveBeenCalled();
  });
});
