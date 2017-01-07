/**
 * Created by jakub on 28.12.16.
 */
import {Routes} from "@angular/router";
import {CustomerDashboardComponent} from "./components/customer-dashboard/customer-dashboard.component";
export const customerRoutes: Routes = [{
  path: 'customer/dash',
  component: CustomerDashboardComponent
}];
