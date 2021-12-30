import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Userdetails} from './userdetails';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private baseUrl = "http://localhost:8090/api/updateuser/";

  constructor(private http:HttpClient) { }



  getCreaacc():Observable<Userdetails[]>{

    return this.http.get<Userdetails[]>(`${this.baseUrl}`);

  }

}
