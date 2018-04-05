import { Component, OnInit, ElementRef } from '@angular/core';
import { dashbaordService } from '../../dashboard.service';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import { LoaderService } from '../../../shared/loader/loader.service';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {
  fileDetails: string[] = [];
  textSize;
  fileSize;
  imageSize;
  audioSize;
  videoSize;

  fileTypeCheck: string;
  uploading_file = false;
  isValid = false;
  clear: any;
  name: any;
  fileName: any;
  size: any;
  unit: any;
  text: any;
  extension: any;
  file: any;
  isSubmitDisabled = true;
  fileSuccessMsg = false;
  validateMsg_fileUpload: string;
  isSubmited = true;
  isError = false;
  constructor(
    private elem: ElementRef,
    private _service: dashbaordService,
    private snackBar: MatSnackBar,
    private _location: Location,
    private loader: LoaderService) { }

  ngOnInit() {
  }
  fileread(event) {
    this.file = event.target.files[0];
    const fileName = event.srcElement.files[0].name;
    const fileExt = this.getFileExt(fileName);
    this.isSubmitDisabled = true;
    if (!this.isFileValid(fileExt.toLowerCase(), 'image')) {
      this.cancel();
      alert("Enter a valid file");
    } else {
      let fileSizeMaz = event.srcElement.files[0].size;

      if (fileSizeMaz > 10485760) {
        alert("File size should be maximum 10 mb");
        return;
      }
      this.fileName = fileName;
      const size = event.srcElement.files[0].size;
      this.size = size.toFixed(2);
      this.isSubmitDisabled = false;
      if (size < 1024) {
        this.size = size.toFixed(2);
        this.unit = "bytes";
      } else if (size < 1024 * 1024) {
        this.size = (size / 1024).toFixed(2);
        this.unit = "KB";
      } else if (size < 1024 * 1024 * 1024) {
        this.size = (size / 1024 / 1024).toFixed(2);
        this.unit = "MB";
      } else {
        this.size = (size / 1024 / 1024 / 1024).toFixed(2);
        this.unit = "GB";
      }
    }

    // event.target.value ="";
    console.log("Filename:", this.size + '' + this.unit);
  }
  getFileExt(fileName) {
    const lastindex = fileName.lastIndexOf(".");
    const ext = fileName.substr(lastindex + 1, fileName.length);
    return ext;
  }
  isFileValid(fileType, typeCheck) {
    let validFormats = [];
    if (typeCheck == "image") {
      validFormats = ["jpg", "jpeg", "png", "tif", "gif", "bmp"];
    } else {
      validFormats = [
        "pdf",
        "rtf",
        "doc",
        "docx",
        "xls",
        "ppt",
        "pptx",
        "csv",
        "xlsx",
        "txt"
      ];
    }

    return validFormats.includes(fileType);
  }
  cancel() {
    this.fileName = null;
    this.size = null;
    this.unit = null;
    this.isSubmitDisabled = true;
  }
  uploadReadfile() {
    let files = this.elem.nativeElement.querySelector("#selectedFile").files;
    let formData = new FormData();
    let file = files[0];
    let user_details = JSON.parse(localStorage.getItem('user_details'));
    let userId = user_details['userId'];
    let userMember = user_details['member'];
    let unique_id = userMember + '_' + userId;
    formData.append("member", userMember);
    formData.append("user", unique_id);
    formData.append("selectedFile", file, file.name);
    this.isSubmited = false;
    this.uploading_file = true;
  
    this._service.UploadData(formData).subscribe(users => {
      if (users['result']['isSuccess'] === "Y") {
        // this.loader.hideLoader();
        //  alert('uploaded Successfully');
        this._service.optmizeImage(formData).subscribe(users => {
          this.loader.hideLoader();
          alert('uploaded Successfully');
        })
        //const fileName = '';

      }
      else {
        alert('Problem uploading file, Please try again...');
      }
      console.log(users);
    })
    // this.isSubmitDisabled = true;
    // this.mLearningService.UploadData(formData).subscribe(

    // );

    //this.uploadAction.emit(formData);
  }
  back() {
    this._location.back();
  }
}
