import { Component, OnInit } from '@angular/core';

import { indiaStateService } from "../shared/india-state.module";
import { RootService } from "../app.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  states;
  stateCtrl = 'all';
  categoryCtrl = 'all';
  foods = [
    { value: 'actor', viewValue: 'Actors wanted' },
    { value: 'extras', viewValue: 'Extras wanted' },
    { value: 'models', viewValue: 'Models wanted' },
    { value: 'musician', viewValue: 'Musicians wanted' },
    { value: 'photographers', viewValue: 'Photographers wanted' },
    { value: 'tv&reality', viewValue: 'TV &amp; Reality' },
    { value: 'dancers', viewValue: 'Dancers wanted' },
    { value: 'film&staff', viewValue: 'Film &amp; Stage Crew wanted' },
    { value: 'hair&makeup', viewValue: 'Hair, Makeup &amp; Stylists wanted' },

  ];
  constructor(private stateService: indiaStateService,
    private appService: RootService,
    private router: Router
  ) {
    this.states = this.stateService.STEPS;
    console.log(this.states);
  }

  ngOnInit() {
  }
  submit() {
    console.log(this.stateCtrl);
    console.log(this.categoryCtrl);
    const obj = {
      state: this.stateCtrl,
      category: this.categoryCtrl
    };
    this.appService.trainingList(obj).subscribe(
      (res) => {
        console.log(res);

        sessionStorage.setItem('masterDatasessionData', JSON.stringify(res['msg']));
        this.router.navigate(['/listTraining']);
      }
    )
    
  }
}
