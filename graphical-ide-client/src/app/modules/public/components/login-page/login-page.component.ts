import { Component, OnInit } from '@angular/core';
import {ILoginUserData} from "../../../../sheards/interfaces/register-use-data.interface";
import {AuthServiceService} from "../../../../sheards/services/auth-service/auth-service.service";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [AuthServiceService]
})
export class LoginPageComponent implements OnInit {

  constructor(private AuthServiceService:AuthServiceService) {
  }

  ngOnInit() {
  }

  login = (newUserOb:ILoginUserData)=>{
    this.AuthServiceService.login(newUserOb);
  }
}
