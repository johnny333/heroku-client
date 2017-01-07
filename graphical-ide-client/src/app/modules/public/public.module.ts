import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {RouterModule} from "@angular/router";
import {publicRoutes} from "./public-router";
import {RegistryPageComponent} from './components/registry-page/registry-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {MenuComponent} from './components/menu/menu.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(publicRoutes),

  ],
  declarations: [HomePageComponent, RegistryPageComponent, LoginPageComponent, MenuComponent]
})
export class PublicModule {
}
