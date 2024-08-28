import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from 'src/app/shared/shared.module';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { SinglePhotoComponent } from './single-photo/single-photo.component';
import { FavoritePhotosComponent } from './favorite-photos/favorite-photos.component';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { GalleryModule } from './gallery.module';

describe('GalleryModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        MatGridListModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        SharedModule,
        GalleryModule,
      ],
    }).compileComponents();
  });

  it('should create the GalleryModule', () => {
    const module = TestBed.inject(GalleryModule);
    expect(module).toBeTruthy();
  });

  it('should compile and create the PhotoGalleryComponent', () => {
    const fixture = TestBed.createComponent(PhotoGalleryComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should compile and create the SinglePhotoComponent', () => {
    const fixture = TestBed.createComponent(SinglePhotoComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should compile and create the FavoritePhotosComponent', () => {
    const fixture = TestBed.createComponent(FavoritePhotosComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should compile and create the LoadingComponent', () => {
    const fixture = TestBed.createComponent(LoadingComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
