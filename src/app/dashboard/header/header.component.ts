import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {dashbaordService} from '../dashboard.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  firstName: string;
  lastName: string;

  constructor(private router: Router, private _service: dashbaordService) { }

  ngOnInit() {
    this._service.getUsers().subscribe(users=>{
      this.firstName = users['result']['firstName'];
      this.lastName = users['result']['lastName']; 
      console.log(users);
    })
  }

  onSignout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['../'])
  }
}
