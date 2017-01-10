import {Component, OnInit, Input} from '@angular/core';
import {IProjectButton} from "../../../../sheards/interfaces/project-button.interface";

@Component({
  selector: 'app-project-button',
  templateUrl: './project-button.component.html',
  styleUrls: ['./project-button.component.css']
})
export class ProjectButtonComponent implements OnInit {
@Input()projectData: IProjectButton;
  
  constructor() { }

  ngOnInit() {

  }

}
