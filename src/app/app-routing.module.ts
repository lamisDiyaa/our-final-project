import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestrantsComponent } from './components/add-restrants/add-restrants.component';
import { ShowDataComponent } from './components/show-data/show-data.component';
import {DisplayRestrantComponent} from './components/display-restrant/display-restrant.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import{SalesComponent} from './components/sales/sales.component'
const routes: Routes = [

  {path:'',redirectTo:'/Dashboard',pathMatch:'full'},
  {path:'AddRestrant',component:AddRestrantsComponent},
  {path:'ShowData',component:ShowDataComponent},
  {path:'DisplayRestrant/:id',component:DisplayRestrantComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'sales',component:SalesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
