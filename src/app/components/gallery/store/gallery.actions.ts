import { createAction, props } from '@ngrx/store';

// Load Random Images Actions
export const loadRandomImages = createAction('[Gallery] Load Random Images');
export const loadRandomImagesSuccess = createAction(
  '[Gallery] Load Random Images Success',
  props<{ image: Blob }>()
);

export const loadRandomImagesFailure = createAction(
  '[Gallery] Load Random Images Failure'
);
