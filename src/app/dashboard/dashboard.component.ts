import { Component, OnInit } from '@angular/core';
import {dashbaordService} from './dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _service:dashbaordService) { }
 

  ngOnInit() {
 
  }

}
