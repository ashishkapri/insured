import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

@Injectable()
export class AuthGaurdService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
