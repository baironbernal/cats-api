import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'favorites', component: FavoritesComponent }, 
      { path: '**', redirectTo: 'dashboard'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
