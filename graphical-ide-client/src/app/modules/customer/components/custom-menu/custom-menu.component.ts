import {Component,ViewChild, OnInit, ElementRef, AfterViewInit} from '@angular/core';
import {INavbarLi} from "../../../../sheards/interfaces/navbar-li.interface";
import {ENavbarSection} from "../../../../sheards/navbar-section.enum";
declare var $:any;
declare var Materialize:any;

@Component({
  selector: 'app-custom-menu',
  templateUrl: './custom-menu.component.html',
  styleUrls: ['./custom-menu.component.css']
})
export class CustomMenuComponent implements OnInit, AfterViewInit  {
  public menuItems: Array<INavbarLi>;
  @ViewChild('button-collapse') el:ElementRef;

  ngAfterViewInit(): void {
    $('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'left',
        closeOnClick: true,
        draggable: true
      }
    );
  }

  constructor() { }

  ngOnInit() {
    this.menuItems  = [
      {id:0,section: ENavbarSection.TOP,name:"ZARABIAJ", callback:() => null, href:"", icon:null},
      {id:1,section: ENavbarSection.TOP,name:"W", callback:() => null, href:"", icon:null},
      {id:2,section: ENavbarSection.TOP,name:"INTERNECIE", callback:() => null, href:"", icon:null},
      {id:3,section: ENavbarSection.TOP,name:"100% SCAM FREE", callback:() => null, href:"", icon:null}
    ];
  }

}
