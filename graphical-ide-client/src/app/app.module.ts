import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RESTModule} from 'ng2-http';
import {AppComponent} from "./app.component";
import {AdminModule} from "./modules/admin/admin.module";
import {CustomerModule} from "./modules/customer/customer.module";
import {PublicModule} from "./modules/public/public.module";
import {appRoutes} from "./sheards/classes/routers/router";
import {RouterModule} from "@angular/router";
import 'hammerjs';
import {Ng2Webstorage} from "ng2-webstorage";
import {AuthServiceService} from "./sheards/services/auth-service/auth-service.service";
import {DragulaModule} from "ng2-dragula";
import { ClassComponent } from './sheards/programming-components/class/class.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RESTModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    Ng2Webstorage,
    DragulaModule,
    AdminModule,
    CustomerModule,
    PublicModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
