import { Component, OnInit } from '@angular/core';
import {APIService} from '../services/API.service';
import { UserService} from '../services/user.service'
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import awsconfig1 from '../../aws-exports-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userDetails = {username:''};

  constructor(private api: APIService, private user: UserService) { 
  
  }

  ngOnInit(): void {
    if(this.user.currentUserValue) {
      this.userDetails = this.user.currentUserValue;
      // Amplify.configure(awsconfig)    
    } else {
      // Amplify.configure(awsconfig1)  
    }
    this.api.ListCategorys().then(res =>
      {
        console.log(res);
      }, error => {
        console.log(error)
      })
  }

}
