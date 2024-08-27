import { Component, OnInit } from '@angular/core';

import {
  FAVORITES_PHOTOS_ROUTE,
  PHOTO_GALLERY_ROUTE,
} from '../gallery/constants/photo-gallery.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  PHOTO_GALLERY_ROUTE = PHOTO_GALLERY_ROUTE;
  FAVORITES_PHOTOS_ROUTE = FAVORITES_PHOTOS_ROUTE;

  galleryGradient = {
    background: '#60a5fa',
    color: '#ffffff',
  };

  favoriteGradient = {
    background: '#f472b6',
    color: '#ffffff',
  };

  activeGalleryStyle = {
    background: '#2563eb',
    color: '#ffffff',
  };

  activeFavoriteStyle = {
    background: '#db2777',
    color: '#ffffff',
  };
}
