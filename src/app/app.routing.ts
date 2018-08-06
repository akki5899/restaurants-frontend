import { Routes,Router,RouterModule } from '@angular/router';
import { PastorderComponent } from './pastorder/pastorder.component';
import { LoginComponent } from './login/login.component';
import { PastorderdetailsComponent } from './pastorderdetails/pastorderdetails.component';

import { HotelComponent } from "./hotel/hotel.component";
const arr:Routes=[
  {path:'abc/:id',component:PastorderComponent},
  {path:'pastorder/:id',component:PastorderdetailsComponent},
  {path:'view',component:HotelComponent},
  {path:'',component:LoginComponent}


]
export const routing = RouterModule.forRoot(arr);
