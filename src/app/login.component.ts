import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class Login implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('formgroup')) {
          console.log("formgroup");
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url and return false
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}