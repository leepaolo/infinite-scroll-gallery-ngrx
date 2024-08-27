import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FAVORITES_PHOTOS_ROUTE,
  PHOTO_GALLERY_ROUTE,
} from './constants/photo-gallery.constant';
import { PhotoGalleryComponent } from './components/gallery/photo-gallery/photo-gallery.component';
import { FavoritePhotosComponent } from './components/gallery/favorite-photos/favorite-photos.component';

const routes: Routes = [
  { path: PHOTO_GALLERY_ROUTE, component: PhotoGalleryComponent },
  { path: FAVORITES_PHOTOS_ROUTE, component: FavoritePhotosComponent },
  { path: '', redirectTo: PHOTO_GALLERY_ROUTE, pathMatch: 'full' },
  { path: '**', redirectTo: PHOTO_GALLERY_ROUTE },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
