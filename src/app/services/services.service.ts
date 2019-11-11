import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url:string = 'http://localhost:8080'

  constructor(private _http:HttpClient) { }

  getUsers() {
    return this._http.get(`${this.url}/user/all`)
  }

}
