import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepositeComponent } from './deposite/deposite.component';
import { SigninComponent } from './signin/signin.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

import { CreateaccComponent } from './createacc/createacc.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: '', component:SigninComponent},
  {path: 'signin', component:SigninComponent},
  { path: 'home', component: HomeComponent },
  { path: 'createacc', component:  CreateaccComponent },
  { path: 'update', component: UpdateComponent},

  { path: 'deposite', component: DepositeComponent },
  { path: 'userdetails', component:  UserdetailsComponent },


  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingModule = RouterModule.forRoot(routes);
