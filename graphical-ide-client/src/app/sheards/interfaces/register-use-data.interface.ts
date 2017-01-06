/**
 * Created by jakub on 03.01.17.
 */
import {IRole} from "./roles.interface";
import {IBaseModel} from "./base-model.interface";
export interface IRegisterUserData extends ILoginUserData,IPersonalUserData {}
export interface IUserData extends IBaseModel,ILoginUserData,IPersonalUserData,IAccountUserData,IError{
}
export interface ILoginUserData{
  email:string;
  password: string;
}
export interface IPersonalUserData{
  name:string;
  surname:string;
}

export interface IAccountUserData{
  roles: Array<IRole>;
}
export interface IError{
  error:string;
}
