import { Component, OnInit } from "@angular/core";

import { dialogueService } from "./dialogue.service";

@Component({
  selector: "app-dialogue",
  templateUrl: "./dialogue.component.html",
  styleUrls: ["./dialogue.component.css"]
})
export class DialogueComponent implements OnInit {
  dialogueCtrls: {};
  constructor(private dialogue_service: dialogueService) {
   this.dialogueCtrls={
     isShown: false
   }
  }
  ngOnInit() {
   
    this.dialogue_service.dailogueObj.subscribe(obj=>{
      this.dialogueCtrls= obj;

    })
  }
 
  actionClick(actionIndex) {
    if(actionIndex === 0){
      this.dialogue_service.hideDialogue(false);
    }
    else if(actionIndex ===1){
      this.dialogue_service.hideDialogue(true);
    }
 
  }
  toastStartTimeout() {
    this.dialogue_service.reinitializeToastBox();
  }
  toastleaveTimeout() {
    this.dialogue_service.persistToastBox();
  }

  dialogueColor = {
    error: {
      color: "#a94442",
      "border-radius": "3px",
      "border-color": "rgb(214, 188, 188)"
    },
    success: {
      color: "#3c763d",
      "border-radius": "3px",
      "border-color": "rgb(174, 191, 160)"
    },
    warning: {
      color: "rgb(255,87,34)",
      "border-radius": "3px",
      "border-color": "rgb(255, 135, 60)"
    },
    general: {}
  };
  dialogueColorIcon = {
    error: {
      background: "#ebccd1"
    },
    success: {
      background: "#dff0d8"
    },
    warning: {
      background: "rgba(249, 115, 61, 0.34)"
    },
    general: {}
  };
  dialogueColorAlert = {
    error: {
      background: "rgb(228, 37, 67)"
    },
    success: {
      background: "#2fa553"
    },
    warning: {
      background: "#e65811"
    },
    general: { background: "#165caf"}
  };
}
