import {ENavbarSection} from "../navbar-section.enum";
/**
 * Created by jakub on 04.01.17.
 */
export interface INavbarLi{
  id:number;
  section:ENavbarSection,
  name:string;
  callback:any
}
