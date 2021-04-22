import { Injectable } from '@angular/core';
import { APIService } from '../services/API.service'
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  category: any;
  users: any;
  ads: any;
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhc2tAdW5pdmVyc2FsLXR1dG9yaWFsLmNvbSIsImFwaV90b2tlbiI6IlQ2VlBOUmZXbkxFbmdsMHd2djctZ1d2Y09KRHFPSkptc3ZoNkNOdGo5a3p1Z1RSYkhvdXVET1NXeTdzYmJzdG5taDAifSwiZXhwIjoxNjE5MTEyNzE5fQ.88GSm2Pt2BV4wO4rDbiMJtNEdRkhcXvvc7cPP7Q8PhM';
  url = 'https://www.universal-tutorial.com/api'
  header = { headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})}
  dataSubject: BehaviorSubject<any>;
  dataSubscription: Observable<any>;
  constructor(private api: APIService, private http: HttpClient) { 
    this.dataSubject = new BehaviorSubject('initial');
    this.dataSubscription = this.dataSubject.asObservable();
  }

  public initial(user?:any) {
    this.api.ListCategoryID().then(res => {
      this.category = res.items;
      this.dataSubject.next('category');
    })
    this.api.ListUsers().then(res => {
      this.users = res.items;
      this.dataSubject.next('users');
    })
    // let filter = {}
    // if (user) filter = {userID: {ne: user.username}}
    this.api.ListAdsHome().then(res => {
      this.ads = res.items;
      this.dataSubject.next('ads');
    })
    
  }

  public getCountries() {
    let url = this.url + '/countries'
    return this.http.get(url,this.header)
  }
  public getState(country:string) {
    let url = this.url + '/states/' + country
    return this.http.get(url,this.header)
  }
  public getCity(state:string) {
    let url = this.url + '/cities/' + state
    return this.http.get(url,this.header)
  }

}
