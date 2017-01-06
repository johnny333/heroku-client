import {Injectable} from '@angular/core';
import {ILoginToken} from "../../interfaces/login-token.interface";
import {ApiUrlPrefix} from "../api-router/api-url-prefix";
import {IUserData, ILoginUserData, IRegisterUserData} from "../../interfaces/register-use-data.interface";
import {Http, Request, Response} from '@angular/http';
import {RESTClient, BaseUrl, DefaultHeaders,  POST, Body,  Produces} from 'ng2-http';
import {Observable} from 'rxjs/Observable';
@BaseUrl(new ApiUrlPrefix().getHostURL())
@DefaultHeaders({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
})
@Injectable()
export class AuthServiceService extends RESTClient {


  constructor(protected http: Http) {
    super(http)
  }


  protected responseInterceptor(res: Observable<Response>): Observable<Response> {
    return super.responseInterceptor(res);
  }


  protected requestInterceptor(req: Request): Request {
    return super.requestInterceptor(req);
  }

  @POST('/home/login/')
  public login(@Body userLoginData: ILoginUserData): Observable<ILoginToken> {
    return null;
  };

  @POST('/home/register')
  public register(@Body user: IRegisterUserData): Observable<IUserData> {
    return null;
  }
}
