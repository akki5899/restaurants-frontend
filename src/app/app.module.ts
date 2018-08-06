import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PastorderComponent } from './pastorder/pastorder.component';
import { Router } from "@angular/router";
import { PastorderdetailsComponent } from './pastorderdetails/pastorderdetails.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatCheckboxModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatTooltipModule} from '@angular/material';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    PastorderComponent,
    PastorderdetailsComponent,
    LoginComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
