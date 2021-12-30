import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { createacc } from './createacc';

@Injectable({
  providedIn: 'root'
})
export class CreateaccService {

  private baseUrl="http://localhost:8090/api/creaaac";
 
  // baseUrl: any;

  // getcreaacc: any;

  constructor(private http:HttpClient) { }
  getCreateacc():Observable<createacc[]>

   {

     return  this.http.get<createacc[]>(`${this.baseUrl}`);

   }

}

