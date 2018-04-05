import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { RootService } from '../app.service'
import { MatSnackBar } from '@angular/material';
import { dialogueService } from '../shared/dialogue/dialogue.service'
import { Observable } from 'rxjs';
import { LoaderService } from ".././shared/loader/loader.service";

@Injectable()

export class dashbaordService {
    firstName: string;
    lastName: string;
    users: any;
    constructor(private service: RootService,
        private http: Http,
        public snackBar: MatSnackBar,
        private dialogueservice: dialogueService,
        private loader: LoaderService
    ) { }
    getUsers() {
        let token = JSON.parse(localStorage.getItem("currentUser"));
        console.log(token);
        let headers = new Headers({ 'Authorization': 'Bearer ' + token['token'] });
        let options = new RequestOptions({ headers: headers });
        // let headers: Headers = new Headers({
        //     'Content-Type': 'application/json',
        //     Authorization: 'Bearer ' + this.service.token
        //               });

        return this.http.get('https://beayou.in/dashboard/dashboard.php', options)
            .map((response) => {
                this.users = response.json()
                if (this.users['isError'] === 'N') {
                    return this.users;
                }
                else {
                    this.loader.hideLoader();
                    let message = this.users['result'];
                    this.snackBar.open(message, '', {
                        duration: 2000,
                    });
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

    getUserDetail(): Observable<any> {
        return this.users;
    }

    updateMobile(info) {
        let token = JSON.parse(localStorage.getItem("currentUser"));
        let headers = new Headers({ 'Authorization': 'Bearer ' + token['token'] });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('https://beayou.in/dashboard/edit/edit_mobile.php', info, options)
            .map((response) => {
                let response_message = response.json()
                if (response_message['isError'] === 'N') {
                    return response_message;
                }
                else {
                    this.loader.hideLoader();
                    let message = response_message['result'];
                    this.snackBar.open(message, '', {
                        duration: 2000,
                    });
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
    uploadVideo(info) {
        let token = JSON.parse(localStorage.getItem("currentUser"));
        let headers = new Headers({ 'Authorization': 'Bearer ' + token['token'] });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('https://beayou.in/dashboard/upload/video_upload.php', info, options)
            .map((response) => {
                let response_message = response.json()
                if (response_message['isError'] === 'N') {
                    return response_message;
                }
                else {
                    this.loader.hideLoader();
                    let message = response_message['result'];
                    this.snackBar.open(message, '', {
                        duration: 2000,
                    });
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
    updateName(info) {
        let token = JSON.parse(localStorage.getItem("currentUser"));
        let headers = new Headers({ 'Authorization': 'Bearer ' + token['token'] });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('https://beayou.in/dashboard/edit/edit_name.php', info, options)
            .map((response) => {
                let response_message = response.json()
                if (response_message['isError'] === 'N') {
                    return response_message;
                }
                else {
                    this.loader.hideLoader();
                    let message = response_message['result'];
                    this.snackBar.open(message, '', {
                        duration: 2000,
                    });
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
    updateImage(info) {
        let token = JSON.parse(localStorage.getItem("currentUser"));
        let headers = new Headers({ 'Authorization': 'Bearer ' + token['token'] });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('https://beayou.in/dashboard/edit/edit_image.php', info, options)
            .map((response) => {
                let response_message = response.json()
                if (response_message['isError'] === 'N') {
                    return response_message;
                }
                else {
                    this.loader.hideLoader();
                    let message = response_message['result'];
                    this.snackBar.open(message, '', {
                        duration: 2000,
                    });
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
    fetchImages(file) {
        let token = JSON.parse(localStorage.getItem("currentUser"));
        let headers = new Headers({ 'Authorization': 'Bearer ' + token['token'] });
        let options = new RequestOptions({ headers: headers });


        return this.http
            .post(
            //  "http://128.136.227.187:81/script_new.php",  //sit
            "https://beayou.in/fetch_image.php", file, options)
            .map((response: Response) => response.json())
    }

    fetchVideo(file) {
        let token = JSON.parse(localStorage.getItem("currentUser"));
        let headers = new Headers({ 'Authorization': 'Bearer ' + token['token'] });
        let options = new RequestOptions({ headers: headers });


        return this.http
            .post(
            //  "http://128.136.227.187:81/script_new.php",  //sit
            "https://beayou.in/dashboard/upload/fetch-video.php", file, options)
            .map((response: Response) => response.json())
    }

    listing_training(info) {
        let token = JSON.parse(localStorage.getItem("currentUser"));
        let headers = new Headers({ 'Authorization': 'Bearer ' + token['token'] });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('https://beayou.in/dashboard/listing/training_listing.php', info, options)
            .map((response) => {
                let response_message = response.json()
                if (response_message['isError'] === 'N') {
                    return response_message;
                }
                else {
                    this.loader.hideLoader();
                    let message = response_message['result'];
                    this.snackBar.open(message, '', {
                        duration: 2000,
                    });
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
    optmizeImage(file) {

        let token = JSON.parse(localStorage.getItem("currentUser"));
        let headers = new Headers({ 'Authorization': 'Bearer ' + token['token'] });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('https://beayou.in/dashboard/upload/test.php', file, options)
            .map((response) => {
                let response_message = response.json()
                if (response_message['isError'] === 'N') {
                    // return this.optmizeImage(file);
                    return response_message;
                }
                else {
                    this.loader.hideLoader();
                    let message = response_message['result'];
                    this.snackBar.open(message, '', {
                        duration: 2000,
                    });

                }

            });

    }
    UploadData(file) {

        let token = JSON.parse(localStorage.getItem("currentUser"));
        let headers = new Headers({ 'Authorization': 'Bearer ' + token['token'] });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://ileadcorporation.com/beayou_test/dashboard/upload/upload.php', file, options)
            .map((response) => {
                let response_message = response.json()
                if (response_message['isError'] === 'N') {
                    // return this.optmizeImage(file);
                    return response_message;
                }
                else {
                    this.loader.hideLoader();
                    let message = response_message['result'];
                    this.snackBar.open(message, '', {
                        duration: 2000,
                    });

                }

            });
        //   return this.http 
        //     .post(
        //      "https://beayou.in/dashboard/upload/upload.php",  //sit
        //   // "http://localhost/script_new.php",  //uat
        //       file)
        //     .map((response: Response) =>response.json())
        //  .post("http://localhost/script.php", file)
    }
}