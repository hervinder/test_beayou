import { Component, OnInit } from '@angular/core';
import { RootService } from '../app.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  private model = {
    user_email: '',
    user_password: '',
    member: ''
  };
  myForm: FormGroup;
  email: FormControl;
  password: FormControl;
  error_msg = '';
  error_flag = false;
  members=[
   {
     name:'Company',
     code:'company'
   },
   {
    name:'Talent',
    code:'talent'
  },
  {
    name:'Training Center',
    code:'training'
  },

  ]
  constructor(
    private signinService: RootService, private router: Router, public ngProgress: NgProgress, private formBuilder: FormBuilder) {
    // this.myForm = formBuilder.group({

    //   'password': ['', Validators.required],

    // });
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      member: new FormControl('company'),
      user_email: new FormControl('', 
      Validators.required
    ),
    user_password: new FormControl('',
       Validators.required)
    })

  }
  auth_user() {
    
    this.ngProgress.start();

    this.signinService.login_auth(this.myForm.value)
      .subscribe((res) => {
        this.ngProgress.done();
   console.log(res);
   if(res === '1'){
    this.router.navigate(["./dashboard"]);
   }
   else if(res === '2'){
    this.error_flag = true;
    this.error_msg = "Invalid Email Id";
   }
   else{
    this.error_flag = true;
    this.error_msg = "Invalid Email Id or Password ";
   }
    
        // if (res['isError'] === 'Y') {
        //   this.error_flag = true;
        //   this.error_msg = res['error'];
        // }
        // else {
        //   this.router.navigate(["./dashboard"])
        //   console.log(res);
        // }

      });

  }
}
