import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class RootService {

    public token;
    constructor(private _http: Http) { }

    trainingList(info) {
        return this._http.post("https://beayou.in/list-training/list-training.php", info)
            .map((response) => response.json());

    }
    addSingupDetails(info) {
        return this._http.post("https://beayou.in/signup/signup_company.php", info)
            .map((response) => response.json());
    }
    login_auth(info) {
        if (info['member'] === 'company') {
            return this._http.post("https://beayou.in/signin/signin_company.php", info)
                .map((response) => {
                    let res = response.json();
                    console.log(res);

                });
        }
        else if (info['member'] === 'talent') {
            return this._http.post("https://beayou.in/signin/signin_talent.php", info)
            .map((response) => {
                let res = response.json();
                let username = info['user_email'];
                if (res['error_code'] === '1') {
                    this.token = res["data"]["token"];
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: this.token }));
                    return res['error_code'];
                }
                else {
                    return res['error_code'];
                }

            });
        }
        else if (info['member'] === 'training') {
            return this._http.post("https://beayou.in/signin/signin_training.php", info)
                .map((response) => {
                    let res = response.json();
                    let username = info['user_email'];
                    if (res['error_code'] === '1') {
                        this.token = res["data"]["token"];
                        localStorage.setItem('currentUser', JSON.stringify({ username: username, token: this.token }));
                        return res['error_code'];
                    }
                    else {
                        return res['error_code'];
                    }

                });
        }
        else {

        }
    }
    addTalentDetails(info) {
        return this._http.post("https://beayou.in/signup/signup_talent.php", info)
            .map((response) => response.json());
    }
    addTraineeDetails(info) {
        return this._http.post("https://beayou.in/signup/signup_training.php", info)
            .map((response) => response.json());
    }
    applyTrainingForm(info) {
        let token = JSON.parse(localStorage.getItem("currentUser"));
        let headers = new Headers({ 'Authorization': 'Bearer ' + token['token'] });
        let options = new RequestOptions({ headers: headers });
        return this._http.post('https://beayou.in/training/training_applied.php', info, options)
            .map((response) => {
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
