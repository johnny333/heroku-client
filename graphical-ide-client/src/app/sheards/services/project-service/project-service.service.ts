import { Injectable } from '@angular/core';
import {DefaultHeaders, BaseUrl, RESTClient, POST, Body, Query, GET, Produces} from "ng2-http/dist/esm/src/index";
import {ApiUrlPrefix} from "../api-router/api-url-prefix";
import {Http, Request, Response} from '@angular/http';
import {Observable} from "rxjs/Rx";
import {ILoginUserData} from "../../interfaces/register-use-data.interface";
import {IProjectModel} from "../../interfaces/project-model.interface";
@BaseUrl(new ApiUrlPrefix().getHostURL())
@DefaultHeaders({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
})
@Injectable()
export class ProjectServiceService extends RESTClient{

  constructor(protected http: Http) {
    super(http)
  }

  protected responseInterceptor(res: Observable<Response>): Observable<Response> {
    return super.responseInterceptor(res);
  }


  protected requestInterceptor(req: Request): Request {
    return super.requestInterceptor(req);
  }

  @POST('/api/customer/createProject')
  public createNewProject(@Body projectData: IProjectModel): Observable<IProjectModel> {
    return null;
  };

  @GET('/api/customer/getProject/')
  @Produces<IProjectModel>()
  public getProjectById(@Query('id') id?: number): Observable<IProjectModel> {
    return null;
  }
}
