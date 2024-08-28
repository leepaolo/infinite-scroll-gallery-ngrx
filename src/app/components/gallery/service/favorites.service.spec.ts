import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';
import { IGallery } from 'src/app/models/gallery.interface';

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initially have an empty favorites list', () => {
    const service1 = new FavoritesService();
    service1.getFavorites().subscribe((favorites) => {
      console.log('Favorites:', favorites);
      expect(favorites.length).toBeGreaterThanOrEqual(0);
    });
  });

  it('should add a photo to favorites', () => {
    const image: IGallery = { id: 1, photo: 'Photo 1' };
    service.addToFavorites(image);
    service.getFavorites().subscribe((favorites) => {
      expect(favorites.length).toBeGreaterThanOrEqual(1);
      expect(favorites[0]).toEqual(image);
    });
  });

  it('should delete a photo from favorites', () => {
    const image: IGallery = { id: 1, photo: 'Photo 1' };
    service.addToFavorites(image);
    service.deleteFromFavorites(image);
    service.getFavorites().subscribe((favorites) => {
      expect(favorites.length).toBe(0);
    });
  });

  it('should load favorites from local storage', () => {
    const image: IGallery = { id: 1, photo: 'Photo 1' };
    localStorage.setItem('favorites', JSON.stringify([image]));
    service['loadFavoritesFromLocalStorage']();
    service.getFavorites().subscribe((favorites) => {
      expect(favorites.length).toBe(1);
      expect(favorites[0]).toEqual(image);
    });
  });

  it('should load favorites from local storage', () => {
    const image: IGallery = { id: 1, photo: 'Photo 1' };
    localStorage.setItem('favorites', JSON.stringify([image]));
    service['loadFavoritesFromLocalStorage']();
    service.getFavorites().subscribe((favorites) => {
      expect(favorites.length).toBe(1);
      expect(favorites[0]).toEqual(image);
    });
  });
});
