import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { logclass } from '../classes/logclass';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string="http://localhost:3000/login/"
  constructor(public _http:HttpClient) { }

  login(item:logclass){
    let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,x,{headers:h})
  }

}

