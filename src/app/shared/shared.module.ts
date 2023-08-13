import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ImageService } from '../images/services/image.service';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    
  ],
})
export class SharedModule { }
