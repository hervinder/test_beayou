import { Component, OnInit } from '@angular/core';
import { dashbaordService } from "../../dashboard.service";
import { Location } from '@angular/common';
import {LoaderService} from '../../../shared/loader/loader.service';
import { dialogueService } from "../../../shared/dialogue/dialogue.service";

@Component({
  selector: 'app-fetch-images',
  templateUrl: './fetch-images.component.html',
  styleUrls: ['./fetch-images.component.css']
})
export class FetchImagesComponent implements OnInit {

  constructor(
    private _service: dashbaordService,
    private _location: Location,
    private dialogue: dialogueService,
    private apploader: LoaderService,
  ) {}
  items:any;
  ngOnInit() {
    let user_details= JSON.parse(localStorage.getItem('user_details'));
    let userId= user_details['userId'];
    let userMember = user_details['member'];
    let unique_id = userMember + '_' + userId;
    this._service.fetchImages(unique_id).subscribe(res=>{
   
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
 
        this.items = res['msg'];
        console.log(res['msg']);
      }
    });
  }
  back(){
    this._location.back();
  }
}
