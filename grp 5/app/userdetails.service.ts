import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userdetails } from './userdetails';
@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  private baseUrl="http://localhost:8090/api/Getcreaaac"
  constructor(private httpClient:HttpClient) { }
  getAllUser():Observable<Userdetails[]>{

    return  this.httpClient.get<Userdetails[]>(`${this.baseUrl}`);

  }


  }


 






