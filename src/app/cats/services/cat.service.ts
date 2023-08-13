import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import Cat from '../interfaces/cat-interface';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  
  constructor(private http: HttpClient, private router: Router) { }

  
  getMyCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(environment.base_back + 'cat');
  }

  deleteCat(id: string) : Observable<Cat> {
    return this.http.delete<Cat>(environment.base_back + 'cat');
  }

  createCat(cat: Cat) {
    return this.http.post<Cat>(environment.base_back + 'cat', cat);
  }

    
}
