/**
 * Created by jakub on 28.12.16.
 */
import {Routes} from "@angular/router";
import {CustomerDashboardComponent} from "./components/customer-dashboard/customer-dashboard.component";
import {ProjectViewPageComponent} from "./components/project-view-page/project-view-page.component";
export const customerRoutes: Routes = [{
  path: 'customer/dash',
  component: CustomerDashboardComponent
},{
  path: 'customer/project',
  component: ProjectViewPageComponent
}];
