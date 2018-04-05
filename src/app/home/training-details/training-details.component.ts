import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RootService } from "../../app.service";


@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {
  id: number;
  private sub: any;
  details;
  constructor(private router: Router, private route: ActivatedRoute,
    private appService: RootService, ) {
    const masterdata = JSON.parse(sessionStorage.getItem('masterDatasessionData'));
    console.log(masterdata);
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      const key = masterdata.filter(x => x.OrderID === this.id.toString());
      this.details = key[0];
      sessionStorage.setItem('training_applied', JSON.stringify(key));
      console.log(key)// (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });


  }

  ngOnInit() {
  }
  apply() {
    const isActive = JSON.parse(localStorage.getItem("currentUser"));
    if (isActive === null) {
      this.router.navigate(['/signin'])

    }
    else {
      this.router.navigate(['/applyTraining']);
    }

  }
}
