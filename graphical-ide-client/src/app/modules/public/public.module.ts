import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {RouterModule} from "@angular/router";
import {publicRoutes} from "./public-router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(publicRoutes),

  ],
  declarations: [HomePageComponent]
})
export class PublicModule {
}
