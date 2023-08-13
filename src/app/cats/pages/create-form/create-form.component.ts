import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CatService } from '../../services/cat.service';
import { Subscription } from 'rxjs';
import Cat from '../../interfaces/cat-interface';
import Swal from 'sweetalert2'
import { CatImage } from 'src/app/images/interfaces/cat-image.interface';
import { SharedService } from '../../../shared/services/shared.service';



@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {

  favs: CatImage[] = [];
  image: string= "assets/backgrounds/default.jpg";
  suscription: Subscription= new Subscription;
  

  catForm = this.fb.group({
    title: ['LUnancha', [Validators.required, Validators.minLength(12)]],
    race: ['Criolla', [Validators.required, Validators.minLength(12)]],
    age: [23, [Validators.required, Validators.maxLength(2)]],
    url_image: this.image
  });

  @ViewChild('myAlert',{ read: ElementRef }) myAlert!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder, private catService: CatService, private sharedService: SharedService ){}


  ngOnInit() {
    this.getFavs();
  }


  getFavs() {
    this.favs = this.sharedService.getFavs();
  }


  updateImage(img: string) {
    this.image  = img;
  }

  
  onSubmit() {
    const cat: Cat = {
      title: this.catForm.get('title')?.value!,
      age: this.catForm.get('age')?.value!,
      url_image: this.catForm.get('url_image')?.value!,
      race: this.catForm.get('race')?.value!,
    }
    this.suscription = this.catService.createCat(cat).subscribe(data => console.log(data));
  }

  searchImage() {
    Swal.fire({
      html: this.myAlert.nativeElement,
    })
  }

  ngOnDestroy(){
    this.suscription.unsubscribe();
  }



  
}
