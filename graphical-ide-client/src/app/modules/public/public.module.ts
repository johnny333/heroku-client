import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {RouterModule} from "@angular/router";
import {publicRoutes} from "./public-router";
import { RegistryPageComponent } from './components/registry-page/registry-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(publicRoutes),

  ],
  declarations: [HomePageComponent, RegistryPageComponent, LoginPageComponent, MenuComponent]
})
export class PublicModule {
}
