import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {adminRoutes} from "./admin-router";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(adminRoutes)

  ],
  declarations: [AdminDashboardComponent]
})
export class AdminModule {
}
