import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ManageComponent } from './manage/manage.component';
import { AddproductsComponent } from './addproducts/addproducts.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'view',component:ViewproductsComponent},
      {path:'manage',component:ManageComponent},
      {path:'update',component:AddproductsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
