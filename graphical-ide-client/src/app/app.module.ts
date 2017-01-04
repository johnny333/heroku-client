import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AdminModule} from "./modules/admin/admin.module";
import {CustomerModule} from "./modules/customer/customer.module";
import {PublicModule} from "./modules/public/public.module";
import {appRoutes} from "./sheards/classes/routers/router";
import {RouterModule} from "@angular/router";
import 'hammerjs';
import {Ng2Webstorage} from "ng2-webstorage";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    Ng2Webstorage,
    AdminModule,
    CustomerModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
