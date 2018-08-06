import { Injectable } from '@angular/core';
import { bill  } from '../classes/bill';
import { HttpClient,HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PastorderDetailsService {
  url:string="http://localhost:3000/pastorder/"
  pastorderdetails:string="http://localhost:3000/past/"
  constructor(public _http:HttpClient) { }
getallpastorder(id){
  return this._http.get(this.url+id);
}

getdetailsproduct(id){
  return this._http.get(this.pastorderdetails+id);

}
}
