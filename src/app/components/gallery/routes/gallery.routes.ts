import { Routes } from '@angular/router';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';
import { FavoritePhotosComponent } from '../favorite-photos/favorite-photos.component';
import { SinglePhotoComponent } from '../single-photo/single-photo.component';

export const galleryRoutes: Routes = [
  { path: '', redirectTo: 'photo-gallery', pathMatch: 'full' },
  { path: 'photo-gallery', component: PhotoGalleryComponent },
  { path: 'favorites', component: FavoritePhotosComponent },
  { path: 'photos/:id', component: SinglePhotoComponent },
];
