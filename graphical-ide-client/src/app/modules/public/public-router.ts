/**
 * Created by jakub on 28.12.16.
 */
import {Routes} from "@angular/router";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {RegistryPageComponent} from "./components/registry-page/registry-page.component";
export const publicRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegistryPageComponent
  }
];
