import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { verifyFavs } from 'src/app/shared/helpers/shared.helpers';
import { CatImage } from 'src/app/images/interfaces/cat-image.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  constructor() { }

  favs: CatImage[] = [];


  getFavs() {
    const favs = verifyFavs();
    return JSON.parse(favs!);
  }  

}
