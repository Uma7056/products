import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { from } from 'rxjs';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ManageComponent } from './manage/manage.component';
import { AddproductsComponent } from './addproducts/addproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewproductsComponent,
    UserdashboardComponent,
    ManageComponent,
    AddproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
