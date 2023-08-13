import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatImage } from '../interfaces/cat-image.interface';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { verifyFavs } from 'src/app/shared/helpers/shared.helpers';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  constructor(private http: HttpClient, private router: Router) { }

  limit: number = 10;
  favs: CatImage[] = [];

  getImagesCats(): Observable<CatImage[]> {
    return this.http.get<CatImage[]>(environment.base_api + 'images/search?limit=' + this.limit);
  }

  addToFav(imageCat: CatImage) {

    let favs = JSON.parse(verifyFavs()!);
    this.favs = [...favs, imageCat];
    localStorage.setItem('favs', JSON.stringify(this.favs));
    
    return this.router.navigateByUrl('/images/favorites');
  
  }
}
