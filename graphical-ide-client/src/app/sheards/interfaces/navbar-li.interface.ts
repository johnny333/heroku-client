import {ENavbarSection} from "../navbar-section.enum";
import {IIconAccess} from "./icon-access.interface";
/**
 * Created by jakub on 04.01.17.
 */
export interface INavbarLi{
  id:number;
  section:ENavbarSection;
  name:string;
  href:string;
  icon:IIconAccess;
  callback:any;
}
