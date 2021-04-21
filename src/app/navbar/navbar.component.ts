import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router';
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import awsconfig1 from '../../aws-exports-api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  signedIn: Boolean = true;
  currentRoute: any;
  constructor(public user: UserService, private router: Router, private ref: ChangeDetectorRef){
    this.router.events
    .pipe(
      filter( event =>event instanceof NavigationEnd)
    )
    .subscribe(
      (event: NavigationEvent) => {
        this.currentRoute = event;
        this.currentRoute = this.currentRoute.urlAfterRedirects;
        console.log(event);
        if(this.user.currentUserValue) {
          console.log("currentuservalue")
          Amplify.configure(awsconfig)    
        } else {
          console.log("awsconfig1")
          Amplify.configure(awsconfig1)  
        }
        // this.ref.detectChanges();
    })
    
  }

  ngOnInit(): void {
    this.user.currentUserData.subscribe(value => {
      if (value) {
        console.log('in navbar')
        this.signedIn = true;
      } else this.signedIn = false;
    })
  }

  public signOut() {
    this.user.signOut();
  }

}
