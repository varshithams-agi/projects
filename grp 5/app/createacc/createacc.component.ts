import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import * as internal from 'stream';
import { CreateaccService } from '../createacc.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { createacc } from '../createacc';
// import { LoginService } from '../login.service';

@Component({
  selector: 'app-createacc',
  templateUrl: './createacc.component.html',
  styleUrls: ['./createacc.component.css']
})

export class CreateaccComponent implements OnInit {
  createaccs!:createacc[];
  constructor(private createaccService:CreateaccService,private https:HttpClient) { }
  onSubmit(data:createacc)
  {
    this.https.post('http://localhost:8090/api/creaacc',data).subscribe((result)=>console.warn("result",result));
    console.warn(data);
  }
  ngOnInit(): void {
  this.createaccService.getCreateacc().subscribe((data:createacc[])=>{
    console.log(data);
    this.createaccs=data;
  });

  }
}