import { Component, OnInit } from '@angular/core';
import {IUserData, IRegisterUserData} from "../../../../sheards/interfaces/register-use-data.interface";
import {AuthServiceService} from "../../../../sheards/services/auth-service/auth-service.service";
import {LocalStorageService} from "ng2-webstorage";

@Component({
  selector: 'app-registry-page',
  templateUrl: './registry-page.component.html',
  styleUrls: ['./registry-page.component.css'],
  providers: [AuthServiceService]

})
export class RegistryPageComponent implements OnInit {

  constructor(private AuthService:AuthServiceService,
              private storage:LocalStorageService) {
  }

  ngOnInit() {
  }

  public register = (email:string,password:string,passwordRep:string,name:string,surname:string)=>{
    if(password!=passwordRep){
      return;
    }
    let userData:IRegisterUserData={
      email,
      password,
      name,
      surname
    };
    this.AuthService.register(userData).subscribe(userData=>{
      if(userData.error){
        return;
      }
    });
  }

}
