import { Routes } from "@angular/router";
import { ProfileComponent } from './profile/profile.component';
import { ListTrainingComponent } from './list-training/list-training.component';
import { DashboardComponent } from "./dashboard.component";
import { MainPageComponent } from "../shared/main-page/main-page.component";
import { ListTraining_ROUTE } from "./list-training/listTraining.route"
import { EditNameComponent } from './profile/edit-name/edit-name.component';
import { EditMobileComponent } from './profile/edit-mobile/edit-mobile.component';
import { EditProfileimageComponent } from './profile/edit-profileimage/edit-profileimage.component';
import { PhotoUploadComponent } from './profile/photo-upload/photo-upload.component';
import { FetchImagesComponent } from './profile/fetch-images/fetch-images.component';
import { VideoComponent } from "./profile/video/video.component";
import { FetchVideoComponent } from "./profile/fetch-video/fetch-video.component";
export const Dashbaord_ROUTE: Routes = [

    { path: '', component: MainPageComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'profile/editname', component: EditNameComponent },
    { path: 'profile/editmobile', component: EditMobileComponent },
    { path: 'profile/editprofileimage', component: EditProfileimageComponent },
    { path: 'profile/upload-photo', component: PhotoUploadComponent },
    { path: 'profile/fetch-photo', component: FetchImagesComponent },
    { path: 'profile/video', component: VideoComponent },
    { path: 'profile/fetch-video', component: FetchVideoComponent },
    { path: 'listTraining', component: ListTrainingComponent, children: ListTraining_ROUTE }


]