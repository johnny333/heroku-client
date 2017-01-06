import {Component,ViewChild, OnInit, ElementRef, AfterViewInit} from '@angular/core';
declare var $:any;
declare var Materialize:any;

@Component({
  selector: 'app-custom-menu',
  templateUrl: './custom-menu.component.html',
  styleUrls: ['./custom-menu.component.css']
})
export class CustomMenuComponent implements OnInit, AfterViewInit  {

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
  }

}
