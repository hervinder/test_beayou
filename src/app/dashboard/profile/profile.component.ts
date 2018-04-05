import { Component, OnInit } from "@angular/core";
import { dashbaordService } from "../dashboard.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  users: any;
  name: string;
  location: string;
  mobile: string;
  profileImage: any;
  image_hide: boolean = true;
  constructor(private _service: dashbaordService) {}

  ngOnInit() {

    this._service.getUsers().subscribe(users => {
      let member = users["result"]["member"];
      let userId = users["result"]["userId"];
      this.name = users["result"]["firstName"] + " " + users["result"]["lastName"];
      this.location = users["result"]["state"];
      this.profileImage = users["result"]["profileImage"];
      let users_localstorage = {
        name: this.name,
        userId: userId,
        member: member
      };
      localStorage.setItem("user_details", JSON.stringify(users_localstorage));
      if (this.profileImage === null || this.profileImage === "") {
        this.image_hide = true;
      } else {
        this.image_hide = false;
      }
      if (
        users["result"]["mobile"] === null ||
        users["result"]["mobile"] === ""
      ) {
        this.mobile = "Add your Number";
      } else {
        this.mobile = users["result"]["mobile"];
      }
    });
  
    console.log(this.users);
  }
}
