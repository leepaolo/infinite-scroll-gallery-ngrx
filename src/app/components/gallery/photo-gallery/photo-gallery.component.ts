import { Component, HostListener, OnInit } from '@angular/core';
import { IGallery } from '../../../models/gallery.interface';
import { GalleryService } from '../service/gallery.service';
import { FavoritesService } from '../service/favorites.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectGalleryState,
  selectImage,
  selectLoading,
} from '../store/gallery.selectors';
import * as GalleryActions from '../store/gallery.actions';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent implements OnInit {
  gallery: IGallery[] = [];
  isLoading: boolean = false;
  isLoading$!: Observable<boolean>; // NgRx
  loadingTitle: string = 'Loading images....';

  constructor(
    private store: Store,
    private galleryService: GalleryService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectLoading);

    this.store.select(selectImage).subscribe((image: Blob | null) => {
      if (image) {
        this.gallery.push({
          id: this.generateRandomId(),
          photo: URL.createObjectURL(image),
          isFavorite: false,
        });
      }
    });
    this.loadImages(12);
  }

  // INFINITE SCROLL
  @HostListener('window:scroll', [])
  onScroll(): void {
    console.log('Scroll event detected'); // Debugging
    const tolerance = 100; // Tolleranza di 100px prima del fondo
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - tolerance
    ) {
      console.log('Loading more images'); // Debugging
      this.loadMoreImages();
    }
  }

  // Load images by dispatching the appropriate action
  loadImages(count: number): void {
    for (let i = 0; i < count; i++) {
      this.store.dispatch(GalleryActions.loadRandomImages());
    }
  }

  // ADD PHOTO TO THE FAVORITES
  addToFavorites(image: IGallery): void {
    if (!image.isFavorite) {
      image.isFavorite = true;
      this.favoritesService.addToFavorites(image);
      console.log('Photo added to favorites', image);
    }
  }

  // LOAD 3 PHOTOS AT A TIME
  loadMoreImages(): void {
    this.loadImages(3);
  }

  generateRandomId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
