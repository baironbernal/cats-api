import { Component, Input } from '@angular/core';
import { CatImage } from 'src/app/images/interfaces/cat-image.interface';
import { ImageService } from '../../../images/services/image.service';
import Cat from 'src/app/cats/interfaces/cat-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(private imageService:ImageService){}

  @Input() catImage?: CatImage;

  @Input() cat?: Cat;
  @Input() configButton?: any;


  addImageToFav(image: CatImage) {
    this.imageService.addToFav(image);
  }
}
