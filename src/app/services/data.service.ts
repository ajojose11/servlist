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
  token = 'B4UnQqbb7wGDWXtZ0wHoGBf1iNX7sN0uAAF5oAk7ayCKUe1Mj457oUSybIeakjlv5tg';
  accessToken:any;
  header: any;
  url = 'https://www.universal-tutorial.com/api';
  header1 = { headers: new HttpHeaders({'api-token': this.token, 'user-email': 'ajojose11@gmail.com'})}
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
  public getAccessToken() {
    let url = this.url + '/getaccesstoken'
    return this.http.get(url,this.header1)
  }

}
