import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { galleryReducer } from './store/gallery.reducer';
import { GalleryEffects } from './store/gallery.effects';

import { galleryRoutes } from './routes/gallery.routes';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SinglePhotoComponent } from './single-photo/single-photo.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { FavoritePhotosComponent } from './favorite-photos/favorite-photos.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SinglePhotoComponent,
    PhotoGalleryComponent,
    LoadingComponent,
    FavoritePhotosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(galleryRoutes),
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    SharedModule,
    StoreModule.forFeature('gallery', galleryReducer),
    EffectsModule.forFeature([GalleryEffects]),
  ],
  exports: [RouterModule, PhotoGalleryComponent],
})
export class GalleryModule {}
