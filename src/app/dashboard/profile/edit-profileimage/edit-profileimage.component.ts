import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImageCropperComponent, CropperSettings, Bounds } from 'ng2-img-cropper';
import {dashbaordService} from '../../dashboard.service';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-profileimage',
  templateUrl: './edit-profileimage.component.html',
  styleUrls: ['./edit-profileimage.component.css']
})
export class EditProfileimageComponent {

  name: string;
  data1: any;
  cropperSettings1: CropperSettings;
  croppedWidth: number;
  croppedHeight: number;
  hide = false;
  upload_image: any;

  @ViewChild('cropper', undefined) cropper: ImageCropperComponent;
  file: any;
  constructor(private elem: ElementRef, private _service:dashbaordService,private snackBar: MatSnackBar, private _location: Location) {
    // super();

    this.cropperSettings1 = new CropperSettings();
    this.cropperSettings1.width = 200;
    this.cropperSettings1.height = 200;

    this.cropperSettings1.croppedWidth = 200;
    this.cropperSettings1.croppedHeight = 220;

    this.cropperSettings1.canvasWidth = 500;
    this.cropperSettings1.canvasHeight = 300;

    this.cropperSettings1.minWidth = 100;
    this.cropperSettings1.minHeight = 100;

    this.cropperSettings1.rounded = false;

    this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;

    this.data1 = {};

  }
  filesave(event) {
    console.log(this.data1);
    this._service.updateImage({'user_image':this.data1.image}).subscribe(users=>{
      console.log(users);
      if(users.isError === 'N'){
        this._location.back();
      this.snackBar.open('Profile Updated Succesfully', '', {
        duration: 5000,
      });
      }
      else{
        this._location.back();
        this.snackBar.open('Server Error, Please try again', '', {
          duration: 5000,
        });
      }
      console.log(users);
    })
    localStorage.setItem('image', JSON.stringify(this.data1));

    //this.upload_image = this.data1

  }

  fetchImage() {
    this.hide = true;
    this.upload_image = JSON.parse(localStorage.getItem("image"));

  }
  fileread(event) {
    this.file = event.target.files[0];
    const fileName = event.srcElement.files[0].name;
  }
  cropped(bounds: Bounds) {
    this.croppedHeight = bounds.bottom - bounds.top;
    this.croppedWidth = bounds.right - bounds.left;
  }

  fileChangeListener($event) {
    var image: any = new Image();
    console.log($event);
    var file: File = $event.target.files[0];
    var myReader: FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);

    };

    myReader.readAsDataURL(file);
  }


}
