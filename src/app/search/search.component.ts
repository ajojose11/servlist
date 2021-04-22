import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../services/API.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  ads: any
  noResults = false;
  constructor(private activatedroute: ActivatedRoute, private graphql: APIService) { 
    this.activatedroute.params.subscribe(data => {
      let filter = {title: {contains: data.param}}
      this.graphql.ListAdsHome(filter).then(res => {
        this.ads = res.items
        if(this.ads.length == 0) { 
          this.noResults = true
        }
      })
    })
  }
  ngOnInit(): void {
  }

}
