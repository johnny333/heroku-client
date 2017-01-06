import {Component, OnInit} from '@angular/core';
import {ILoginUserData} from "../../../../sheards/interfaces/register-use-data.interface";
import {AuthServiceService} from "../../../../sheards/services/auth-service/auth-service.service";
import {SessionStorageService} from "ng2-webstorage";
import {FormBuilder, Validators} from "@angular/forms";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [AuthServiceService],
})
export class LoginPageComponent implements OnInit {

  constructor(private AuthServiceService: AuthServiceService,
              private SessionStorageService: SessionStorageService,
              ) {
  }

  ngOnInit() {
    console.log("Konponent strona logowania")
  }

  public login = (email:string,password:string)=> {
    let newUserOb= {
      email,
      password
    };
    console.log("newUSerOb", newUserOb);
    this.AuthServiceService.login(newUserOb).subscribe(token => {
      this.SessionStorageService.store('token', token);
      console.log("zalogowano użytkownika", newUserOb, token);
    });
  }
}
