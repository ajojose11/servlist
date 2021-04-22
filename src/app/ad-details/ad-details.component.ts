import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../services/API.service'

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent implements OnInit {
  ad: any = {categoy:''}
  constructor(private activatedroute: ActivatedRoute, private graphql: APIService, private router: Router) { 
    this.activatedroute.params.subscribe(data => {
      this.graphql.GetAdvertisements(data.id).then(res => {
        this.ad = res;
      },error => {
        this.router.navigate(['/home']);
      })
    })
  }

  ngOnInit(): void {
  
  }

}
