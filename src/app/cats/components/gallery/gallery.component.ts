import { Component, Input , Output, EventEmitter} from '@angular/core';
import { CatImage } from 'src/app/images/interfaces/cat-image.interface';  

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  
  @Input() catGallery: CatImage[] = [];
  @Output() imageNew = new EventEmitter<string>();


  ngOnInit() {
    console.log("Veces de renderizados")
  }

  updateImage(value: string) {
    this.imageNew.emit(value);
  }
}
