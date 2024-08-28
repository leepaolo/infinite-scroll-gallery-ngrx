import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IGallery } from 'src/app/models/gallery.interface';
import { FavoritesService } from '../service/favorites.service';

@Component({
  selector: 'app-favorite-photos',
  templateUrl: './favorite-photos.component.html',
  styleUrls: ['./favorite-photos.component.scss'],
})
export class FavoritePhotosComponent {
  favoritePhotos: IGallery[] = [];
  emptyTitle = 'There are no favorite photos yet';
  ctaTitle = 'Add your first favorite photo';

  constructor(
    private router: Router,
    private favoritesService: FavoritesService
  ) {}

  // Get favorites photos
  ngOnInit(): void {
    this.favoritesService.getFavorites().subscribe((favorites) => {
      this.favoritePhotos = favorites;
    });
  }

  // Navigate to single photo view
  openPhoto(photo: IGallery): void {
    this.router.navigate(['/photos', photo.id]);
  }

  navigateToGallery(): void {
    this.router.navigate(['/photo-gallery']);
  }
}
