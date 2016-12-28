import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import {customerRoutes} from "./customer-router";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(customerRoutes)
  ],
  declarations: [CustomerDashboardComponent]
})
export class CustomerModule { }
