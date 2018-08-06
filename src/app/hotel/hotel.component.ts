import { Component, OnInit } from '@angular/core';
import { HotelserService } from '../service/hotelser.service';
import { cusines } from '../classes/cusines';
import { dish } from '../classes/dish';
import { bill } from '../classes/bill';
import { BilltbldemoService } from '../service/billtbldemo.service';
import { billdetails } from '../classes/billdetails';
import { PastorderDetailsService } from '../service/pastorder-details.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor(public _Ser:HotelserService,public _abc:BilltbldemoService,public _pro:PastorderDetailsService,public act:Router) { }
  cusines1:cusines[]=[];
  cid:number;
  dish1:dish[]=[];
  arr:dish[]=[];
  qty:number[]=[];
  qty1:number[]=[];
  bill_tbl:bill[]=[];
  bill_details:billdetails[]=[];
  gt:number=0;
  i:number;
  total1:number=0;
  price:number[]=[];
  dish_id:number[]=[];
  subtotal:number[]=[];
  user_id:string;

  ngOnInit() {
    this.user_id = localStorage.getItem("id");
this._Ser.getallcusine().subscribe(
  (data:cusines[])=>{
  this.cusines1=data;
  })
  this._Ser.getalldish(1).subscribe(
    (data:dish[])=>{
      this.dish1=data;
    }
  )
  for (let i = 1; i < 50; i++) {
    this.qty1.push(i);
  }
}
getdatabycid(id)
{
  this._Ser.getalldish(id).subscribe(
    (data:dish[])=>{
      this.dish1=data;
      console.log(data);
    }
  )
}
bill(item:dish)
{
 this.arr.push(item);
 this.qty.push(1);
 this.price.push(item.dish_price);
 this.dish_id.push(item.dish_id);
 console.log(this.arr)
 this.total1+=item.dish_price;
}

total(price,a)
{
  this.price[a]=price*this.qty[a];
  this.total1=0;
  for(this.i=0;this.i<this.price.length;this.i++)
  {
    this.total1+=this.price[this.i];
  }
}
ondelete(i)
{
  this.total1 -=this.price[i];
  this.arr.splice(i,1)
  this.price.splice(i,1);
  this.qty.splice(i,1);
}
onaddtobill()
{
  console.log(this.user_id);
  this._abc.addbill(new bill(this.total1,this.user_id)).subscribe(
    (data:any)=>{
      console.log()
       for(this.i=0;this.i<this.arr.length;this.i++)
      {

        this.bill_details.push(new billdetails(this.dish_id[this.i],this.qty[this.i],this.price[this.i],data.insertId));
      }
      console.log(this.bill_details);
         this._abc.addbilldetails(this.bill_details).subscribe(
           (data:any)=>
           {
             alert("Record added in table successfully");
            this.total1 =0;
            this.arr.splice(0,this.dish_id.length);
            this.price.splice(0,this.price.length);
            this.qty.splice(0,this.qty.length);
          }
  )}
)}

pastorderdetails()
{
  this.act.navigate(['/abc',this.user_id]);
}
}

