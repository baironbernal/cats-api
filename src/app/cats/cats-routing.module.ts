import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCatsComponent } from './pages/my-cats/my-cats.component';
import { CreateFormComponent } from './pages/create-form/create-form.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: 'my-cats', component: MyCatsComponent },
      { path: 'create-form', component: CreateFormComponent },
      { path: '**', redirectTo: 'my-cats'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatsRoutingModule { }
