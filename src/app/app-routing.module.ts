import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/gallery/gallery.module').then(
        (m) => m.GalleryModule
      ),
  },

  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
  { path: '**', redirectTo: '/gallery' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
