import { Injectable, Output, EventEmitter } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { ApiToken } from '../models/token.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  @Output() UserStateChanged = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const authToken = localStorage.getItem('AuthToken');
    if (authToken !== null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }

  setUserLoggedIn(tokenAuth: ApiToken) {
    localStorage.setItem('AuthToken', JSON.stringify(tokenAuth))
    this.UserStateChanged.emit(true);
  }

  logoutUser() {
    localStorage.removeItem('AuthToken');
    this.UserStateChanged.emit(false);
  }

}
