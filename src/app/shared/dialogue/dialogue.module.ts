import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { dialogueService } from "./dialogue.service";

import { DialogueComponent } from './dialogue.component';


@NgModule({
  declarations: [

    DialogueComponent
  ],
  imports: [
    BrowserModule
  ],
  exports:[
    DialogueComponent
  ],

  providers: [dialogueService]
})
export class DialogueModule { }
