import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CustomerDashboardComponent} from "./components/customer-dashboard/customer-dashboard.component";
import {customerRoutes} from "./customer-router";
import {RouterModule} from "@angular/router";
import { CustomMenuComponent } from './components/custom-menu/custom-menu.component';
import { ProjectButtonComponent } from './components/project-button/project-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(customerRoutes)
  ],
  declarations: [CustomerDashboardComponent, CustomMenuComponent, ProjectButtonComponent]
})
export class CustomerModule {
}
