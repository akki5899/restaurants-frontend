import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PastorderDetailsService } from '../service/pastorder-details.service';
import { past } from '../classes/pastorder';

@Component({
  selector: 'app-pastorderdetails',
  templateUrl: './pastorderdetails.component.html',
  styleUrls: ['./pastorderdetails.component.css']
})
export class PastorderdetailsComponent implements OnInit {

  constructor(public act:ActivatedRoute,public _pro:PastorderDetailsService) { }
id:number;
pastorder:past[]=[]
  ngOnInit() {
    this.id=this.act.snapshot.params['id'];
 console.log(this.id);
    this._pro.getdetailsproduct(this.id).subscribe(
  (data:any)=>{
    this.pastorder=data;
    console.log(data);
    console.log(this.pastorder);
  }
)
  }

}
