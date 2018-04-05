import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogueModule } from './shared/dialogue/dialogue.module';
/* Featured Module */
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './shared/loader/loader.service';
import { NgProgressModule } from 'ngx-progressbar';
import { AppComponent } from './app.component';
import { YooHeaderComponent } from './yoo-header/yoo-header.component';
import { AppSignupComponent } from './signup/app-signup.component';
import { APP_ROUTES_PROVIDERS } from './app.route';
import { RootService } from './app.service';
import { dashbaordService } from './dashboard/dashboard.service'
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupTalentComponent } from './signup/signup-talent/signup-talent.component';
import { MemberComponent } from './shared/member/member.component';
import { TrainingComponent } from './signup/training/training.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { DropdownDirective } from './dropdown.directive';
import { MainPageComponent } from './shared/main-page/main-page.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ListTrainingComponent } from './dashboard/list-training/list-training.component';
import { Step1Component } from './dashboard/list-training/step1/step1.component';
import { Step2Component } from './dashboard/list-training/step2/step2.component';
import { CustomMaterialModule } from './angular-material';
import { AuthGuard } from './app.auth.guards';
import { EditNameComponent } from './dashboard/profile/edit-name/edit-name.component';
import { EditMobileComponent } from './dashboard/profile/edit-mobile/edit-mobile.component';
import { EditProfileimageComponent } from './dashboard/profile/edit-profileimage/edit-profileimage.component';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';
import { PhotoUploadComponent } from './dashboard/profile/photo-upload/photo-upload.component';
import { FetchImagesComponent } from './dashboard/profile/fetch-images/fetch-images.component';
import {indiaStateService} from './shared/india-state.module'
import 'rxjs/add/operator/take';
import { VideoComponent } from './dashboard/profile/video/video.component';
import { FetchVideoComponent } from './dashboard/profile/fetch-video/fetch-video.component';
import { TrainingListingComponent } from './home/training-listing/training-listing.component';
import { TrainingDetailsComponent } from './home/training-details/training-details.component';
import { ApplyTrainingComponent } from './home/apply-training/apply-training.component';


@NgModule({
  declarations: [
    AppComponent,
    YooHeaderComponent,
    AppSignupComponent,
    HomeComponent,
    SigninComponent,
    SignupTalentComponent,
    MemberComponent,
    TrainingComponent,
    DashboardComponent,
    HeaderComponent,
    DropdownDirective,
    MainPageComponent,
    ProfileComponent,
    ListTrainingComponent,
    Step1Component,
    Step2Component,
    EditNameComponent,
    EditMobileComponent,
    ImageCropperComponent,
    EditProfileimageComponent,
    PhotoUploadComponent,
    FetchImagesComponent,
    LoaderComponent,
    VideoComponent,
    FetchVideoComponent,
    TrainingListingComponent,
    TrainingDetailsComponent,
    ApplyTrainingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    APP_ROUTES_PROVIDERS,
    BrowserAnimationsModule,
    NgProgressModule,
    CustomMaterialModule,
    DialogueModule

  ],
  providers: [
    RootService,
     dashbaordService, 
     AuthGuard,
     LoaderService,
     indiaStateService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
