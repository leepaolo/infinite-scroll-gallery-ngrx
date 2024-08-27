import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { FavoritePhotosComponent } from './favorite-photos/favorite-photos.component';
import { SinglePhotoComponent } from './single-photo/single-photo.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { galleryRoutes } from './routes/gallery.routes';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    PhotoGalleryComponent,
    FavoritePhotosComponent,
    SinglePhotoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(galleryRoutes),
    MatButtonModule,
    MatIconModule,
  ],
  exports: [RouterModule],
})
export class GalleryModule {}
