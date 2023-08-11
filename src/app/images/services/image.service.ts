import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatImage } from '../interfaces/cat-image.interface';
import { environment } from '../../../environments/environment.development';
import { ImageHelper } from '../helpers/image.helper';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  constructor(private http: HttpClient, private imageHelper: ImageHelper, private router: Router) { }

  limit: number = 10;
  favs: CatImage[] = [];

  getImagesCats(): Observable<CatImage[]> {
    return this.http.get<CatImage[]>(environment.base_api + 'images/search?limit=' + this.limit);
  }

  getFavs() {
    const favs = this.imageHelper.verifyFavs();
    return JSON.parse(favs!);
  }

  addToFav(imageCat: CatImage) {

    let favs = JSON.parse(this.imageHelper.verifyFavs()!);
    this.favs = [...favs, imageCat];
    localStorage.setItem('favs', JSON.stringify(this.favs));
    
    return this.router.navigateByUrl('/images/favorites');
  
  }
}
