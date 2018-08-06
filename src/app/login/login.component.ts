import { Component, OnInit } from '@angular/core';
import { logclass } from '../classes/logclass';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email_id:string;
  public password:string;
  arr:logclass[]=[]
  constructor(public _log:LoginService,private _abc:Router) { }
  ngOnInit() {
  }
  login(){
    localStorage.setItem("id",this.email_id);
    this._log.login(new logclass(this.email_id,this.password)).subscribe(
      (data:any)=>{
        console.log(data);
        if (data.length>=1)
        {
          this._abc.navigate(['view']);

        }
        else
        {
          alert("your Email Id or Passwod is Incorect");
        }
      }
    )
  }
}
