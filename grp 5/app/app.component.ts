import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { createacc } from './createacc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'banksystem';
  constructor(private https:HttpClient){}

  onSubmit(data:createacc)

  {

    this.https.post('http://localhost:8091/api/creaacc',data).subscribe((result)=>

    console.warn("result",result));

console.warn(data);

  }

  }

