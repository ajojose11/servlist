import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Auth from '@aws-amplify/auth';
import { error } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  user = Auth;
  constructor( private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      try{
    return this.user.currentAuthenticatedUser().then(res => {
      console.log("trueeeee",res)
      return true;
    }, error => {
      console.log("falseeee")
      // not logged in so redirect to login page with the return url
      this.router.navigate(['login']);
      return false;
    })
   
}catch(err){
  console.log(err)
  return true;
}
  }
 
}
