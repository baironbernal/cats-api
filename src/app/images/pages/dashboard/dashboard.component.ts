import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CatImage } from '../../interfaces/cat-image.interface';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../styles/images.component.scss']
})
export class DashboardComponent {

  imagesCats: CatImage[] = [];

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
