import {Injectable} from '@angular/core';
import {ILoginToken} from "../../interfaces/login-token.interface";
import {ApiUrlPrefix} from "../api-router/api-url-prefix";
import {EApiUrlParts} from "../api-router/e-api-url-parts";
import {IUserData, ILoginUserData} from "../../interfaces/register-use-data.interface";
import {Http, Request, Response} from '@angular/http';
import {RESTClient, BaseUrl, DefaultHeaders, GET, POST, Body, Query, Produces} from 'ng2-http';
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
  @Produces<ILoginToken>()
  public login(@Body userLoginData: ILoginUserData): Observable<ILoginToken> {
    return null;
  };

  @POST(`${new ApiUrlPrefix().getHostUrlWithParams([EApiUrlParts.API, EApiUrlParts.HOME, EApiUrlParts.REGISTER])}`)
  @Produces<IUserData>()
  public register(@Body user: IUserData): Observable<IUserData> {
    return null;
  }
}
