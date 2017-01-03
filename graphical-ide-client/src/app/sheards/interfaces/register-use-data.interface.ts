/**
 * Created by jakub on 03.01.17.
 */
import {IRole} from "./roles.interface";
export interface IUserData{
  id:number;
  email:string;
  password: string;
  roles: Array<IRole>;
  name:string;
  surname:string;
}
