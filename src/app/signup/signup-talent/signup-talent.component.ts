import { Component, OnInit } from '@angular/core';
import { RootService } from '../../app.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { newUser_Talent } from "../signup-talent";
@Component({
  selector: 'app-signup-talent',
  templateUrl: './signup-talent.component.html',
  styleUrls: ['./signup-talent.component.css']
})
export class SignupTalentComponent implements OnInit {
  title = 'app';
  private _checkedInterest: string ='';
  optionsChecked= [];

  model = new newUser_Talent();


  constructor(
    private signupService: RootService,
    private router: Router) { }

  ngOnInit() { }

  addTalent() {
    console.log(this.model);
    this.updateOptions();
    this.signupService.addTalentDetails(this.model)
      .subscribe((res) => console.log(res));
  }

  updateCheckedOptions(option, event){
    console.log(option);
    console.log(event);
    this.optionMap[option] = event.target.checked;
    console.log(this.optionMap);
  }
  optionMap= {
    acting:false,
    extras: false,
    modeling:false,
    musician: false,
    photography: false,
    tv_reality: false,
    dancing:false,
    film_stage_crew:false,
    stylist:false,
    magazine:false,
    general_jobs:false


  };
  updateOptions() {
    for(var x in this.optionMap) {
        if(this.optionMap[x]) {
          
            this._checkedInterest = this._checkedInterest + x +'~'

        }
    }
    this._checkedInterest = this._checkedInterest.substring(0,this._checkedInterest.length -1);
     this.model['interest']= this._checkedInterest;
     this._checkedInterest='';
    console.log(this.model);
   
}
  data = [{
    "name": "Acting",
    "code":"acting"
  }, {
    "name": "Extras",
    "code":"extras"
  }, {
    "name": "Modeling",
    "code":"modeling"
  }, {
    "name": "Musician",
    "code":"musician"
  }, {
    "name": "Photography",
    "code": 'photography'
  }, {
    "name": "TV & Reality",
    "code":"tv_reality"
  }, {
    "name": "Dancing",
    "code":"dancing"
  }, {
    "name": "Film & Stage Crew",
    "code":"film_stage_crew"
  }, {
    "name": "Stylist",
    "code":"stylist"
  }, {
    "name": "Magazine",
    "code": "magazine"
  }, {
    "name": "General Jobs",
    "code":"general_jobs"
  }];

  month = [{
    "name": "January",
    "code": "1"
  }, {
    "name": "February",
    "code": "2"
  }, {
    "name": "March",
    "code": "3"
  }, {
    "name": "April",
    "code": "4"
  }, {
    "name": "June",
    "code": "5"
  }, {
    "name": "July",
    "code": "7"
  }, {
    "name": "August",
    "code": "8"
  }, {
    "name": "September",
    "code": "9"
  }, {
    "name": "October",
    "code": "10"
  }, {
    "name": "Novemeber",
    "code": "11"
  }, {
    "name": "December",
    "code": "12"
  }];

  days = [{
    "name": "1"
  }, {
    "name": "2"
  }, {
    "name": "3"
  }, {
    "name": "4"
  }, {
    "name": "5"
  }, {
    "name": "6"
  }, {
    "name": "7"
  }, {
    "name": "8"
  }, {
    "name": "9"
  }, {
    "name": "10"
  }, {
    "name": "11"
  }, {
    "name": "12"
  }, {
    "name": "13"
  }, {
    "name": "14"
  }, {
    "name": "15"
  }, {
    "name": "16"
  }, {
    "name": "17"
  }, {
    "name": "18"
  }, {
    "name": "19"
  }, {
    "name": "20"
  }, {
    "name": "2"
  }, {
    "name": "21"
  }, {
    "name": "22"
  }, {
    "name": "23"
  }, {
    "name": "24"
  }, {
    "name": "25"
  }, {
    "name": "26"
  }, {
    "name": "27"
  }, {
    "name": "28"
  }, {
    "name": "29"
  }, {
    "name": "30"
  }, {
    "name": "31"
  }];

  years = [{
    "name": "2000"
  },
  {
    "name": "1999"
  },
  {
    "name": "1998"
  },
  {
    "name": "1997"
  },
  {
    "name": "1996"
  },
  {
    "name": "1995"
  },
  {
    "name": "1994"
  },
  {
    "name": "1993"
  },
  {
    "name": "1992"
  },
  ]


}
