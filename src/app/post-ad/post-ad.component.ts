import { Component, OnInit, OnDestroy } from '@angular/core';
import { APIService, CreateAdvertisementsInput} from '../services/API.service';
import {UserService } from '../services/user.service'
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.scss']
})
export class PostAdComponent implements OnInit, OnDestroy{
  category: any
  phone: any
  title: any
  country: any
  state: any
  city: any
  countryList: any
  stateList: any
  cityList: any
  description: any
  userDetails: any
  categoryID: any
  subscrip: any
  constructor(private api: APIService, private data: DataService, private user: UserService, private router: Router) {
   }

  ngOnInit(): void {
     this.user.currentUser().then(res=> {
      this.userDetails = res;
      this.api.GetUser(this.userDetails.username).then(value=> {
        this.userDetails = value;
      })
    })
    this.api.ListCategoryID().then(res => {
      this.category = res.items;
    })
    this.data.getAccessToken().subscribe((res:any)=> {
      this.data.header = { headers: new HttpHeaders({'Authorization': 'Bearer ' + res.auth_token})}
      this.getCountry();
    })
    
  }
  getCountry() {
    this.data.getCountries().subscribe(res=> {
      this.countryList = res;
    })
  }
  getState(country: string) {
    this.data.getState(country).subscribe(res=> {
      this.stateList = res;
    })
  }
  getCity(state: string) {
    this.data.getCity(state).subscribe(res=> {
      this.cityList = res;
    })
  }
  onSubmit() {

    let query:CreateAdvertisementsInput = {
      userID: this.userDetails.id,
      categoryID: this.categoryID,
      title: this.title,
      description: this.description,
      country: this.country,
      state: this.state,
      city: this.city,
      phone: this.phone,
      createdTime: new Date()
    }
    this.api.CreateAdvertisements(query).then(res=> {
      this.router.navigate(['home'])
    })
  }
  ngOnDestroy() {
    // this.subscrip.unsubscribe();
  }
}
