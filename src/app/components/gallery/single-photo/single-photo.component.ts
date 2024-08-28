import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGallery } from 'src/app/models/gallery.interface';
import { FavoritesService } from '../service/favorites.service';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss'],
})
export class SinglePhotoComponent implements OnInit {
  photo: IGallery | undefined;
  removeFavoriteTitle = 'Remove from favorites';

  galleryGradient = {
    background: '#60a5fa',
    color: '#ffffff',
  };

  activeGalleryStyle = {
    background: '#2563eb',
    color: '#ffffff',
  };

  isFavoritesEmpty: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    const photoId = this.route.snapshot.paramMap.get('id');
    if (photoId) {
      this.favoritesService.getFavorites().subscribe((favorites) => {
        this.photo = favorites.find((fav) => fav.id === photoId);
      });
    }
  }

  removeFromFavorites(): void {
    if (this.photo) {
      this.favoritesService.deleteFromFavorites(this.photo);

      // Dopo aver rimosso la foto, verifica se la lista dei preferiti è vuota
      this.favoritesService.getFavorites().subscribe((favorites) => {
        if (favorites.length === 0) {
          // Se vuota, naviga alla pagina della galleria fotografica
          this.router.navigate(['/photo-gallery']);
        } else {
          // Altrimenti, rimani nella pagina dei preferiti
          this.router.navigate(['/favorites']);
        }
      });
    }
  }
}
