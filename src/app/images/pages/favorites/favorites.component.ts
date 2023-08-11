import { Component } from '@angular/core';

import { ImageService } from '../../services/image.service';
import { CatImage } from '../../interfaces/cat-image.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['../../styles/images.component.scss']
})
export class FavoritesComponent {
  
  favs: CatImage[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.getFavs()
  }

  getFavs() {
    this.favs = this.imageService.getFavs();
  }
}
