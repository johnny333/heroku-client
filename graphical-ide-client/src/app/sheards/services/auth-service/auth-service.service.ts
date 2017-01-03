import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {ILoginToken} from "../../interfaces/login-token.interface";
import {ApiUrlPrefix} from "../api-router/api-url-prefix";
import {EApiUrlParts} from "../api-router/e-api-url-parts";
import {IUserData} from "../../interfaces/register-use-data.interface";

@Injectable()
export class AuthServiceService {

  constructor(private http: Http) {
  }

  public login = (login: string, password: string): Promise<ILoginToken> => {
    return this.http.post(ApiUrlPrefix()
      .getHostUrlWithParams(
        [EApiUrlParts.API,
          EApiUrlParts.HOME,
          EApiUrlParts.LOGIN
        ]), {login, password}).toPromise.then(response => response.json() as ILoginToken)
      .catch((e)=> {
      });
  };

  public register = (user: IUserData): Promise<ILoginToken> => {
    return this.http.post(ApiUrlPrefix()
      .getHostUrlWithParams(
        [EApiUrlParts.API,
          EApiUrlParts.HOME,
          EApiUrlParts.REGISTER
        ]), user).toPromise.then(response => response.json() as ILoginToken)
      .catch((e)=> {
      });
  };

}
