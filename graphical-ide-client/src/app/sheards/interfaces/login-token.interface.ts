import {IBaseModel} from "./base-model.interface";
/**
 * Created by jakub on 03.01.17.
 */
export interface ILoginToken extends IBaseModel{
  token:string;
  exp:string;
}
