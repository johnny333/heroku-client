import { Component, OnInit } from '@angular/core';
import {DragulaService} from "ng2-dragula";

@Component({
  selector: 'app-project-view-page',
  templateUrl: './project-view-page.component.html',
  styleUrls: ['./project-view-page.component.css']
})
export class ProjectViewPageComponent implements OnInit {

  constructor(private dragulaService: DragulaService) { }

  ngOnInit() {
  }

}
