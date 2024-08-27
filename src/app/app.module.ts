import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoGalleryComponent } from './components/gallery/photo-gallery/photo-gallery.component';
import { PhotoGalleryDetailsComponent } from './components/gallery/photo-gallery-details/photo-gallery-details.component';
import { FavoritePhotosComponent } from './components/gallery/favorite-photos/favorite-photos.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoGalleryComponent,
    PhotoGalleryDetailsComponent,
    FavoritePhotosComponent,
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
