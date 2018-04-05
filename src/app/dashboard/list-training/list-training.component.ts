import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { indiaStateService } from "../../shared/india-state.module";
import { dashbaordService } from '../dashboard.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import {dialogueService} from '../../shared/dialogue/dialogue.service';
import { LoaderService } from "../../shared/loader/loader.service";
@Component({
  selector: 'app-list-training',
  templateUrl: './list-training.component.html',
  styleUrls: ['./list-training.component.css']
})
export class ListTrainingComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  states;
  foods = [
    {value: 'actor', viewValue: 'Actors wanted'},
    {value: 'extras', viewValue: 'Extras wanted'},
    {value: 'models', viewValue: 'Models wanted'},
    {value: 'musician', viewValue: 'Musicians wanted'},
    {value: 'photographers', viewValue: 'Photographers wanted'},
    {value: 'tv&reality', viewValue: 'TV &amp; Reality'},
    {value: 'dancers', viewValue: 'Dancers wanted'},
    {value: 'film&staff', viewValue: 'Film &amp; Stage Crew wanted'},
    {value: 'hair&makeup', viewValue: 'Hair, Makeup &amp; Stylists wanted'},
  
  ];
  constructor(
    private dialogue: dialogueService,
    private apploader: LoaderService,
    private _formBuilder: FormBuilder, private stateService:indiaStateService,
    private _service: dashbaordService, 
    private router: Router, private snackBar: MatSnackBar, private _location: Location) { }
 
  ngOnInit() {
  this.states = this.stateService.STEPS;
    console.log(this.stateService.STEPS);
    this.firstFormGroup = this._formBuilder.group({
      institute_name:['', Validators.required],
      emailCtrl:['', Validators.required],
      numberCtrl:['', Validators.required],
      stateCtrl:['', Validators.required],
      courseCtrl : ['', Validators.required],
      categoryCtrl: ['', Validators.required],
      detailsCtrl :['']
     
    });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }
  auth_user(){
    this._service.listing_training(this.firstFormGroup.value).subscribe(res => {
      if(res.isError === "Y"){
        let message = res.error;
        
        this.dialogue.alertBox({
          title: 'Error',
          message: message,
          messageType: 'error',
          actionlabel: ['Close']
        }).take(1).subscribe((res) => {
          console.log(res);
        });
      }
      else{
        this.dialogue.alertBox({
          title: 'Sucess',
          message: 'Data Successfully Inserted',
          messageType: 'success',
          actionlabel: ['Close']
        }).take(1).subscribe((res) => {
          this._location.back();
          console.log(res);
        });
      }



    
     
      console.log(res);
    })
  }
  back(){
    this._location.back();
  }
  
}
