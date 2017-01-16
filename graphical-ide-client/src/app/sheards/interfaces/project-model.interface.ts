import {IBaseModel} from "./base-model.interface";
/**
 * Created by Abc on 2017-01-16.
 */
export interface IProjectModel extends IBaseModel{
  userId: number,
  buttonId: number,
  content: any,
  name: string,
  timestamp: string
}
