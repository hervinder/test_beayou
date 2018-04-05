import { Component, OnInit } from '@angular/core';
import { RootService } from "../../app.service";

import { ActivatedRoute, Params, Router } from '@angular/router';
import { indiaStateService } from "../../shared/india-state.module";
@Component({
  selector: 'app-training-listing',
  templateUrl: './training-listing.component.html',
  styleUrls: ['./training-listing.component.css']
})
export class TrainingListingComponent implements OnInit {

  listingsObj;
  no_records= false;
  constructor(private appService: RootService,
    private router: Router, private stateService: indiaStateService) { }


  ngOnInit() {
    const list = JSON.parse(sessionStorage.getItem('masterDatasessionData'));
    if (list.length === 0) {
      this.no_records = true;
      console.log("NO records");
    }
    else {
      this.no_records = false;
      this.listingsObj = list;
    }

  }
  getstate(state) {
    const states = this.stateService.STEPS;
    let result = '';
    console.log(state);
    console.log(states);
    // for (var key in states) {
    //   if (key['code'] === state) {
    //     return key['name'];
    //   }
    // }
    states.forEach(
      (x) => {
        if (x['code'] === state) {
          result = x['name'];
        }

      }
    )

    return result;

  }
  list(cards) {

    this.router.navigate(['/listDetails', cards.OrderID])
    console.log(cards);
  }
}
