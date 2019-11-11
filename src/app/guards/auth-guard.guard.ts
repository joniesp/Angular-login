import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
  constructor (private _router: Router, private _auth:LoginService) {}

  canActivate():boolean {
    
    if (this._auth.readToken()) {
      return true 
    } else {
      this._router.navigate(['/login'])
    }
  }
  
}
