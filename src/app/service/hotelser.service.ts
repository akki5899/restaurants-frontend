import { Injectable } from '@angular/core';
import { HttpClient,HttpHandler } from '@angular/common/http';
import { cusines } from '../classes/cusines';
import { dish } from '../classes/dish';
@Injectable({
  providedIn: 'root'
})
export class HotelserService {

  cusines:string="http://localhost:3000/cusine/";
  dish:string="http://localhost:3000/dish/";
  constructor(public _http:HttpClient) { }
  getallcusine(){
    return this._http.get(this.cusines);
  }
  getalldish(id)
  {
    return this._http.get(this.dish+id);
  }
}
