import { createReducer, on } from '@ngrx/store';
import * as GalleryActions from './gallery.actions';

export interface GalleryState {
  image: Blob | null;
  loading: boolean;
}

export const initialState: GalleryState = {
  image: null,
  loading: false,
};

export const galleryReducer = createReducer(
  initialState,
  on(GalleryActions.loadRandomImages, (state) => ({ ...state, loading: true })),
  on(GalleryActions.loadRandomImagesFailure, (state) => ({
    ...state,
    image: null,
    loading: false,
  })),
  on(GalleryActions.loadRandomImagesSuccess, (state, { image }) => ({
    ...state,
    image,
    loading: false,
  }))
);
