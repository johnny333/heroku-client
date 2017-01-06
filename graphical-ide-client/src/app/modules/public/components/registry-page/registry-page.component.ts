import { Component, OnInit } from '@angular/core';
import {IUserData} from "../../../../sheards/interfaces/register-use-data.interface";
import {AuthServiceService} from "../../../../sheards/services/auth-service/auth-service.service";
import {SessionStorageService} from "ng2-webstorage";

@Component({
  selector: 'app-registry-page',
  templateUrl: './registry-page.component.html',
  styleUrls: ['./registry-page.component.css'],
  providers: [AuthServiceService]

})
export class RegistryPageComponent implements OnInit {

  constructor(private AuthService:AuthServiceService,
              private SessionStorageService:SessionStorageService) {
  }

  ngOnInit() {
  }

  public register = (userData:IUserData)=>{
    this.AuthService.register(userData).subscribe(userData=>{
      console.log("dodano użytkownika",userData,userData);
    })
  }

}
