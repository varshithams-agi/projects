import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  USER_KEY !:'auth-user';

  private baseUrl="http://localhost:8090/api/geta/"

  constructor(private httpClient:HttpClient) { }

  getAllAdmin(id:string):Observable<Login[]>{

    return  this.httpClient.get<Login[]>(`${this.baseUrl}${id}`);

  }

  public saveUser(user: any):void{

    window.sessionStorage.removeItem(this.USER_KEY);

    window.sessionStorage.setItem(this.USER_KEY,JSON.stringify(user));

       

  }

  public getUser(): any {

    const user = window.sessionStorage.getItem(this.USER_KEY);

    if (user) {

      return JSON.parse(user);

    }

    return {};

  }
}
