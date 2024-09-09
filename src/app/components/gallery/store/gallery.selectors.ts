import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GalleryState } from './gallery.reducer';

export const selectGalleryState =
  createFeatureSelector<GalleryState>('gallery');

export const selectImage = createSelector(
  selectGalleryState,
  (state: GalleryState) => state.image
);

export const selectLoading = createSelector(
  selectGalleryState,
  (state) => state.loading
);
