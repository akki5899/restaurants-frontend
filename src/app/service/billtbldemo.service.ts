import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { bill } from '../classes/bill';
import { billdetails } from '../classes/billdetails';

@Injectable({
  providedIn: 'root'
})
export class BilltbldemoService {
billtbl:string="http://localhost:3000/bill/"
billdetail:string="http://localhost:3000/billdetails/"
  constructor(public _http:HttpClient) { }

addbill(item:bill)
{
  let x=JSON.stringify(item);
  let h=new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.billtbl,x,{headers:h})
}
addbilldetails(item:billdetails[])
{
  let x=JSON.stringify(item);
  let h=new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.billdetail,x,{headers:h})
}

}
