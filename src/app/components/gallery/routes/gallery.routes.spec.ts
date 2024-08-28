import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';
import { FavoritePhotosComponent } from '../favorite-photos/favorite-photos.component';
import { SinglePhotoComponent } from '../single-photo/single-photo.component';
import { galleryRoutes } from './gallery.routes';

describe('galleryRoutes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        PhotoGalleryComponent,
        FavoritePhotosComponent,
        SinglePhotoComponent,
      ],
    });
  });

  it('should have the correct number of routes', () => {
    expect(galleryRoutes.length).toBe(4);
  });

  it('should redirect to photo-gallery when the path is empty', () => {
    const route = galleryRoutes.find((r) => r.path === '');
    expect(route).toBeDefined();
    if (route) {
      expect(route.redirectTo).toBe('photo-gallery');
      expect(route.pathMatch).toBe('full');
    }
  });

  it('should have the correct component for photo-gallery route', () => {
    const route = galleryRoutes.find((r) => r.path === 'photo-gallery');
    expect(route).toBeDefined();
    if (route) {
      expect(route.component).toBe(PhotoGalleryComponent);
    }
  });

  it('should have the correct component for favorites route', () => {
    const route = galleryRoutes.find((r) => r.path === 'favorites');
    expect(route).toBeDefined();
    if (route) {
      expect(route.component).toBe(FavoritePhotosComponent);
    }
  });

  it('should have the correct component for single photo route', () => {
    const route = galleryRoutes.find((r) => r.path === 'photos/:id');
    expect(route).toBeDefined();
    if (route) {
      expect(route.component).toBe(SinglePhotoComponent);
    }
  });
});
