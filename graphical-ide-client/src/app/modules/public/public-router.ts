/**
 * Created by jakub on 28.12.16.
 */
import {Routes} from "@angular/router";
import {HomePageComponent} from "./components/home-page/home-page.component";
export const publicRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  }
];
