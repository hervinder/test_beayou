import { Component, OnInit } from '@angular/core';
import { RootService } from '../app.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { newUser } from '../signup';

@Component({
  selector: 'app-app-signup',
  templateUrl: './app-signup.component.html',
  styleUrls: ['./app-signup.component.css']
})
export class AppSignupComponent implements OnInit {
    title='Hello';

  constructor(
    private signupService: RootService,
    private router: Router) { }

  ngOnInit() {
  }
  model = new newUser();
  addUser() {
    console.log(this.model);
    this.signupService.addSingupDetails(this.model)
      .subscribe((res) => console.log(res));
  }
}
