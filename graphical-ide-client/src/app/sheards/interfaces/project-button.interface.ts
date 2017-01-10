import {IBaseModel} from "./base-model.interface";
import {IIconAccess} from "./icon-access.interface";
/**
 * Created by Abc on 2017-01-10.
 */
export interface IProjectButton extends IBaseModel{
  title: string;
  subtitle: string;
  icon: IIconAccess;
  description: string;
  projectId: number;
  userId: number;
}
