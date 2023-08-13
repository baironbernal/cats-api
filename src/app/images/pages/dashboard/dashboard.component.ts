import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CatImage } from '../../interfaces/cat-image.interface';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../shared/styles/images.component.scss']
})
export class DashboardComponent {

  imagesCats: CatImage[] = [];
  configButton = [
    {
      color: 'pink',
      name: 'favorite',
      function(nameFn: string) {
          return nameFn;
      }
    }
  ]

  private suscription: Subscription = new Subscription;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.getCatsImage()
  }

  getCatsImage() {
    this.suscription = this.imageService.getImagesCats().subscribe(data => this.imagesCats = data);
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
   }

    
}
