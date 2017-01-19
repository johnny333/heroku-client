import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CustomerDashboardComponent} from "./components/customer-dashboard/customer-dashboard.component";
import {customerRoutes} from "./customer-router";
import {RouterModule} from "@angular/router";
import { CustomMenuComponent } from './components/custom-menu/custom-menu.component';
import { ProjectButtonComponent } from './components/project-button/project-button.component';
import { ProjectViewPageComponent } from './components/project-view-page/project-view-page.component';
import { ProfileViewPageComponent } from './components/profile-view-page/profile-view-page.component';
import { FieldComponent } from './components/field/field.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(customerRoutes)
  ],
  declarations: [CustomerDashboardComponent, CustomMenuComponent, ProjectButtonComponent, ProjectViewPageComponent, ProfileViewPageComponent, FieldComponent]
})
export class CustomerModule {
}
