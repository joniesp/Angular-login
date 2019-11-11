import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string = 'http://localhost:8080'
  private token:string

  constructor(private _http:HttpClient) { }


  login(user:UserModel){
    const data = { ...user}
    
    return this._http.post(`${this.url}/user/login`, data)
        .pipe( map (res => {
          this.saveToken(res['token']) 
          return res
        }))
  }

  private saveToken (tokenId:string) {
    this.token = tokenId
    localStorage.setItem('token', this.token)
  }

  readToken ():boolean {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token')
      return true
    } else {
      this.token = ''
      return false
    }
  }
}
