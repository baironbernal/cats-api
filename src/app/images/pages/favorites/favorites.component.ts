import { Component } from '@angular/core';
import { CatImage } from '../../interfaces/cat-image.interface';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['../../../shared/styles/images.component.scss']
})
export class FavoritesComponent {
  
  favs: CatImage[] = [];

  
  constructor(private sharedService: SharedService) {}
  ngOnInit() {
    this.getFavs()
  }

  getFavs() {
    this.favs = this.sharedService.getFavs();
  }
}
