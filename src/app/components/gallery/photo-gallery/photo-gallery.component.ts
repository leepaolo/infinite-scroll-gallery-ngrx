import { Component, HostListener, OnInit } from '@angular/core';
import { IGallery } from '../../../models/gallery.interface';
import { GalleryService } from '../service/gallery.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent implements OnInit {
  gallery: IGallery[] = [];
  isLoading: boolean = false;

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleryService.getLoadingStatus().subscribe((loading) => {
      this.isLoading = loading;
    });
    this.loadImages(12);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.loadMoreImages();
    }
  }

  loadImages(count: number): void {
    for (let i = 0; i < count; i++) {
      this.galleryService.getRandomImage().subscribe((blob: Blob) => {
        const objectURL = URL.createObjectURL(blob);
        const image: IGallery = {
          id: this.generateRandomId(),
          photo: objectURL,
          isFavorite: false,
        };
        this.gallery.push(image);
      });
    }
  }

  loadMoreImages(): void {
    this.loadImages(3);
  }

  private generateRandomId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
