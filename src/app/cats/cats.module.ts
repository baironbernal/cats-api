import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { MyCatsComponent } from './pages/my-cats/my-cats.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CreateFormComponent } from './pages/create-form/create-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageService } from '../images/services/image.service';
import { GalleryComponent } from './components/gallery/gallery.component';


@NgModule({
  declarations: [
    MyCatsComponent,
    CreateFormComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    CatsRoutingModule,
    SharedModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule
  ],
   providers: [
    ImageService
   ]
})
export class CatsModule { }
