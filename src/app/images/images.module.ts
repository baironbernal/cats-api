import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SharedModule } from '../shared/shared.module';
import { ImageHelper } from './helpers/image.helper';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    ImagesRoutingModule,
    RouterModule,
    SharedModule,
    MatButtonModule,
    MatIconModule
  ], 
  providers: [
    ImageHelper
  ]
})
export class ImagesModule { }
