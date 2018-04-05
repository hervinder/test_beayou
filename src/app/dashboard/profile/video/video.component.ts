import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

import { dashbaordService } from '../../dashboard.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import { dialogueService } from "../../../shared/dialogue/dialogue.service";
import { LoaderService } from "../../../shared/loader/loader.service";
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(
    private _service: dashbaordService,
    private router: Router,
    private snackBar: MatSnackBar,
    private _location: Location,
    private dialogue: dialogueService,
    private apploader: LoaderService,

  ) { }
  myForm: FormGroup;
  email: FormControl;
  ngOnInit() {

    this.myForm = new FormGroup({
      video_url: new FormControl('',
        Validators.required)



    })
  }
  auth_user() {
    this.apploader.showLoader("");
    this._service.uploadVideo(this.myForm.value).subscribe(res => {
      this.apploader.hideLoader();
      if (res.isError === "Y") {
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
      else {
        this.dialogue.alertBox({
          title: 'Sucess',
          message: 'Submitted Successfully',
          messageType: 'success',
          actionlabel: ['Close']
        }).take(1).subscribe((res) => {

          this._location.back();

        });
      }
    })
  }
  back() {
    this._location.back();
  }

}
