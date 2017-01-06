import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {ILoginToken} from "../../interfaces/login-token.interface";
import {ApiUrlPrefix} from "../api-router/api-url-prefix";
import {EApiUrlParts} from "../api-router/e-api-url-parts";
import {IUserData, ILoginUserData} from "../../interfaces/register-use-data.interface";
import {Router} from "@angular/router";
import {SessionStorageService} from "ng2-webstorage";

@Injectable()
export class AuthServiceService {

  constructor(private http: Http,private _router: Router) {
  }

  public login = (userLoginData:ILoginUserData) => {
/*   return this.http.post(new ApiUrlPrefix()
    .getHostUrlWithParams(
      [EApiUrlParts.API,
        EApiUrlParts.HOME,
        EApiUrlParts.LOGIN
      ]), userLoginData)
      .subscribe(response=>{
        console.log("resp login callback",response);
        //this.session.store('token',response);
      },
        error=>{});*/
  };

  public register = (user: IUserData)=> {
   /* return this.http.post(new ApiUrlPrefix()
      .getHostUrlWithParams([EApiUrlParts.API, EApiUrlParts.HOME, EApiUrlParts.REGISTER]), user)

      .subscribe(response=>{
        console.log("resp register callback",response);
          //this.session.store('user-data',response);
          this._router.navigate(['/login'])
      },
        error=>{});
  */}
}
