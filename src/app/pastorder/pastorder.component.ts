import { Component, OnInit } from '@angular/core';
import { bill } from '../classes/bill';
import { Router, ActivatedRoute } from '@angular/router';
import { PastorderDetailsService } from '../service/pastorder-details.service';
@Component({
  selector: 'app-pastorder',
  templateUrl: './pastorder.component.html',
  styleUrls: ['./pastorder.component.css']
})
export class PastorderComponent implements OnInit {

  constructor(public act:ActivatedRoute,public _pro:PastorderDetailsService,public rout:Router) { }
  id:string;
  billtbl:bill[]=[]
  ngOnInit() {
    this.id=this.act.snapshot.params['id'];

      this._pro.getallpastorder(this.id).subscribe(
    (data:any)=>{
      this.billtbl=data;
      console.log(data);
      console.log(this.billtbl);
    }
  )
  }


  pastorder(item:bill){
    this.rout.navigate(['/pastorder',item.bill_no]);
  }

}
