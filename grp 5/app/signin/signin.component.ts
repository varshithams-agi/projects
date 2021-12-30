import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router,private login:LoginService) { }

  ngOnInit(): void {
  }
  id!:string;

  password!:string;

  


onSubmit(formValue:NgForm){

 console.log(formValue);

//  this.login.getAllAdmin(this.id).subscribe(data =>{this.login.saveUser(data)

//   ;});

//  const user=this.login.getUser();

  if(this.id=="admin" && this.password=="12345678")

  {

  this.router.navigate(['/home']) }

  else if(this.id==" " && this.password==" ")

  {

   

    }


else{



}

}

}
