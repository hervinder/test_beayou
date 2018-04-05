import { Routes } from "@angular/router";
import {Step1Component} from "./step1/step1.component"
import {Step2Component} from "./step2/step2.component"
export const ListTraining_ROUTE: Routes = [

    { path: 'step1', component: Step1Component },
    { path: 'step2', component: Step2Component },
    { path: '', component: Step1Component },
    


]