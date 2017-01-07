import {Component, OnInit} from '@angular/core';
import {INavbarLi} from "../../../../sheards/interfaces/navbar-li.interface";
import {ENavbarSection} from "../../../../sheards/navbar-section.enum";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menuItems: Array<INavbarLi>;

  constructor() {

  }

  ngOnInit() {
    this.menuItems  = [
      {id:0,section: ENavbarSection.TOP,name:"ZARABIAJ", callback:() => null, href:"", icon:null},
      {id:1,section: ENavbarSection.TOP,name:"W", callback:() => null, href:"", icon:null},
      {id:2,section: ENavbarSection.TOP,name:"INTERNECIE", callback:() => null, href:"", icon:null},
      {id:3,section: ENavbarSection.TOP,name:"100% SCAM FREE", callback:() => null, href:"", icon:null}
    ];
  }

}

