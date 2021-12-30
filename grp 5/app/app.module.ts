import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DepositeComponent } from './deposite/deposite.component';
import { SigninComponent } from './signin/signin.component';

import { UserdetailsComponent } from './userdetails/userdetails.component';
import { CreateaccComponent } from './createacc/createacc.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { Userdetails } from './userdetails';
import { UpdateComponent } from './update/update.component';
// import { UpdateuserComponent } from './updateuser/updateuser.component';
// import { DeleteuserComponent } from './deleteuser/deleteuser.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepositeComponent,
    SigninComponent,
 
    UserdetailsComponent,
    CreateaccComponent,
    NavbarComponent,
    NavComponent,
    UpdateComponent,
    // UpdateuserComponent,
    // DeleteuserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
