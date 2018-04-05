import { Component, OnInit } from '@angular/core';
import { RootService } from '../../app.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {  newTrainee } from '../training.model';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { CustomValidators } from '../../shared/custom.validators';
import {dialogueService} from '../../shared/dialogue/dialogue.service';
import {LoaderService} from "../../shared/loader/loader.service";
import { indiaStateService } from "../../shared/india-state.module";

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  myForm: FormGroup;
  states;
  constructor(
    private dialogue: dialogueService,
    private apploader: LoaderService,
    private stateService:indiaStateService,
    private signupService: RootService,
    private router: Router) { }

  ngOnInit() {
    this.states = this.stateService.STEPS;
    this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('', Validators.required),
      trainingName: new FormControl(''),
      trainingWebsite: new FormControl(''),
      state: new FormControl('', Validators.required)
    })
  }

  model = new newTrainee();
  addTrainee() { 
    console.log(this.myForm.value);  
    this.apploader.showLoader(""); 
    // console.log(this.model);
     this.signupService.addTraineeDetails(this.myForm.value)
       .subscribe((res) => {
        this.apploader.hideLoader();
       
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
          this.myForm.reset();
          this.dialogue.alertBox({
            title: 'Sucess',
            message: 'Account Create Successfully',
            messageType: 'success',
            actionlabel: ['Close']
          }).take(1).subscribe((res) => {
            console.log(res);
          });
        }
        
       });
  }
}
