import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cats',
    loadChildren: () => import('./cats/cats.module').then(m => m.CatsModule)
  },
  {
    path: 'images',
    loadChildren: () => import('./images/images.module').then(m => m.ImagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
