import { Component, OnInit } from '@angular/core';
import { dashbaordService } from '../../dashboard.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import { dialogueService } from "../../../shared/dialogue/dialogue.service";
import { LoaderService } from "../../../shared/loader/loader.service";
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-fetch-video',
  templateUrl: './fetch-video.component.html',
  styleUrls: ['./fetch-video.component.css']
})
export class FetchVideoComponent implements OnInit {

  constructor(
    private _service: dashbaordService,
    private router: Router,
    private snackBar: MatSnackBar,
    private _location: Location,
      private dialogue: dialogueService,
      private apploader: LoaderService,
    private _sanitizer: DomSanitizer
  ) { }
video_url;
  ngOnInit() {
    this.apploader.showLoader("");
    this._service.fetchVideo("user").subscribe(res=>{
  
      console.log(res);
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
       
          let url = res['result']['video_url'];
          let url_index = url.split('?v=');
           let video_url_string ="//www.youtube.com/embed/" +url_index[1] + "?rel=0";
       this.video_url =this._sanitizer.bypassSecurityTrustResourceUrl(video_url_string);; 
       console.log(this.video_url);
        // this._location.back();

       
      }
    }); 
  }
  back(){
     this._location.back();
  }
}
