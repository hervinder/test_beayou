import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { indiaStateService } from "../../shared/india-state.module";

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import { RootService } from "../../app.service";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-apply-training',
  templateUrl: './apply-training.component.html',
  styleUrls: ['./apply-training.component.css']
})
export class ApplyTrainingComponent implements OnInit {
  firstFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder, private service: RootService,
  private http:Http
  ) {
    this.firstFormGroup = this._formBuilder.group({

      emailCtrl: ['', Validators.required],
      numberCtrl: ['', Validators.required],
      member: ['', Validators.required],
      date:['', Validators.required],


    });
  }

  ngOnInit() {
  }
  submit() {
    const masterdata = JSON.parse(sessionStorage.getItem('training_applied'));
    console.log(masterdata.PersonID);
    const obj= {
      trainer_id: masterdata[0]['PersonID'],
      user_info : this.firstFormGroup.value

    }
    console.log(this.firstFormGroup.value);
    // this.service.applyTrainingForm(this.firstFormGroup.value).subscribe(users=>{

    //   console.log(users);
    // })
    let token = JSON.parse(localStorage.getItem("currentUser"));
    let headers = new Headers({ 'Authorization': 'Bearer ' + token['token'] });
    let options = new RequestOptions({ headers: headers });
     this.http.post('https://beayou.in/training/training_applied.php', obj, options)
        .subscribe((response) => {
            let response_message = response.json()
            if (response_message['isError'] === 'N') {
                return response_message;
            }
            else {
                //  this.loader.hideLoader();
                let message = response_message['result'];

                // this.dialogueservice.toastBox({
                //     title: 'Error',
                //     message: message,
                //     messageType: 'error',
                //     actionlabel: ['Close']
                //       }).take(1).subscribe((res)=>{
                //         console.log(res);
                //       })
            }

        });
  }
}
