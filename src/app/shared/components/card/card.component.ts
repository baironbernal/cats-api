import { Component, Input } from '@angular/core';
import { CatImage } from 'src/app/images/interfaces/cat-image.interface';
import { ImageService } from '../../../images/services/image.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(private imageService:ImageService){}

  @Input() catImage: CatImage = {
    height: 0, id: '', url : '', width: 0
  }


  addImageToFav(image: CatImage) {
    this.imageService.addToFav(image);
  }
}
