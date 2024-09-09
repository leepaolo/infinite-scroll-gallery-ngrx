import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { environment } from 'src/enviroments/enviroments';
import { loadRandomImages, loadRandomImagesSuccess } from './gallery.actions';

@Injectable()
export class GalleryEffects {
  private readonly apiUrl = environment.API_BASE_URL;

  constructor(private actions$: Actions, private http: HttpClient) {}

  // Load Random Images Effect
  loadRandomImages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRandomImages),
      mergeMap(() =>
        this.http.get(this.apiUrl, { responseType: 'blob' }).pipe(
          map((image) => loadRandomImagesSuccess({ image })),
          catchError(() => of({ type: 'Load Random Images Failure' }))
        )
      )
    )
  );
}
