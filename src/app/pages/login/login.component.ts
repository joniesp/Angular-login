import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  user:UserModel
  loginTrue:boolean

  constructor(private _loginService:LoginService, private _router:Router) { 
    this.user = new UserModel()
    this.loginTrue = true
  }

  ngOnInit() {
    if (this._loginService.readToken()) {
      this._router.navigate(['/inicio'])
    }
  }

  login (form:NgForm) {
    if (form.invalid) {
      return
    }

    this._loginService.login(this.user)
      .subscribe((res) => {
        if (res['correcto'] === true) {
          this.loginTrue = true
          this._router.navigate(['/inicio'])
        }
      }, (error) => {
        this.loginTrue = false
      })
  }



}
