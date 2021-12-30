
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

import { Userdetails } from '../userdetails';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  id!:string;

 

  constructor( private httpClient:HttpClient) { }

  ngOnInit(): void {}

  onSubmit(data:Userdetails)

  {

    this.httpClient.post('http://localhost:8090/api/updateuser/' + `${data.id}`,data).subscribe((result)=>

    {

    console.warn("result",this.id);

    console.warn(data);

  })

}

}