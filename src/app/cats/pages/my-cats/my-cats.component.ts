import { Component } from '@angular/core';
import Cat from '../../interfaces/cat-interface';
import { Subscription } from 'rxjs';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-my-cats',
  templateUrl: './my-cats.component.html',
  styleUrls: ['../../../shared/styles/images.component.scss', './my-cats.component.scss']
})
export class MyCatsComponent {
  cats: Cat[] = [];

  private suscription: Subscription = new Subscription;

  constructor(private catService: CatService) {}

  ngOnInit() {
    this.getCatsImage()
  }

  getCatsImage() {
    this.suscription = this.catService.getMyCats().subscribe(data => this.cats = data);
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
   }
}
