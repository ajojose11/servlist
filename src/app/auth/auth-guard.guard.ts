import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import Auth from '@aws-amplify/auth';


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
      return true;
    }, error => {
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
