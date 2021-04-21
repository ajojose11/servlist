import { Injectable } from '@angular/core';
import Auth from '@aws-amplify/auth';
import { NgZone, ApplicationRef } from '@angular/core';
import { Hub, Logger } from 'aws-amplify';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router} from '@angular/router';
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import awsconfig1 from '../../aws-exports-api';

@Injectable({
  providedIn: 'root'

})
export class UserService {
  user = Auth;
  userDetails: any;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUserData: Observable<any>;
  constructor(private router: Router, private ngzone: NgZone, private ref:ApplicationRef) {
    this.currentUserSubject = new BehaviorSubject(undefined);
    this.currentUserData = this.currentUserSubject.asObservable();
    this.storeUser();
    Hub.listen('auth', (data => {
      switch (data.payload.event) {
        case 'signIn':
            console.log('user signed in');
            this.storeUser();
            console.log("awsconfig")
            Amplify.configure(awsconfig)
            this.ngzone.run(()=>router.navigate(['/home']));
            break;
      }
    }))   
   }

   public get currentUserValue() {
    return this.currentUserSubject.value;
}
 public storeUser(): any {
  this.user.currentAuthenticatedUser().then(user=> {
    console.log('success')
    console.log(user);
    this.currentUserSubject.next(user);
    console.log("awsconfig")
    Amplify.configure(awsconfig)
    this.ref.tick();
  }, (error) => {
    console.log('error');
  } )
 }
 
 public signOut() {
   try{
   this.user.signOut().then(res => {
     console.log('logged out', res)
     console.log("awsconfig1")
     Amplify.configure(awsconfig1)
     this.currentUserSubject.next(undefined);
     this.ref.tick();
     window.location.reload();

   });
  }catch(error) {
    console.log('error signing out')
  }
   
 }
}
