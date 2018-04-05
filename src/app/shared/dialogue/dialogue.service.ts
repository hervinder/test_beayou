import { Injectable ,EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

  
@Injectable()
export class dialogueService{
     
      dailogueObj: EventEmitter<object> = new EventEmitter();
      public timeoutId;
      result = new EventEmitter<boolean>();
      
      constructor(){}
  //-------------------------- Toast Functionality---------------------------------
    toastBox(config): Observable<Boolean>{
        
        this.dailogueObj.emit({
          type:'toast',
          title : config.title ? config.title : 'Toast Box',
          message : config.message ,
          isShown:true,
          messageType : config.messageType ? config.messageType : 'general',
          actionLabel : (config.actionlabel && config.actionlabel.length) > 0 ? config.actionlabel : ['Cancel', 'Ok'],
         
        })
        this.persistToastBox();
        this.reinitializeToastBox();
        return this.result;
       
   }
 
   persistToastBox(){
    clearTimeout(this.timeoutId); 
   }
   reinitializeToastBox(){ 
     clearTimeout(this.timeoutId); 
      this.timeoutId = setTimeout(() => {  
      this.hideDialogue(false);
      }, 3000);
      
   }
   //------------------------AlertBox Functionality---------------------------------------

   alertBox(config): Observable<Boolean>{
    this.dailogueObj.emit({
      type:'alert',
      title : config.title ? config.title : 'Alert Box',
      message : config.message ,
      isShown:true,
      messageType : config.messageType ? config.messageType : 'general',
      actionLabel : (config.actionlabel && config.actionlabel.length) > 0 ? config.actionlabel : ['Ok'],
     
    })
    return this.result;
   }
   confirmBox(config): Observable<Boolean>{
    this.dailogueObj.emit({
      type:'confirm',
      title : config.title ? config.title : 'Confirm Box',
      message : config.message ,
      isShown:true,
      messageType : config.messageType ? config.messageType : 'general',
      actionLabel : (config.actionlabel && config.actionlabel.length) > 0 ? config.actionlabel : ['Cancel', 'Ok'],
     
    })
    return this.result;
   }
   
   hideDialogue(params){
    
    this.dailogueObj.emit({
      type:'toast',
      title : null,
      message : null,
      isShown:false,
      messageType : null,
      actionLabel : null,

    });

  this.result.emit(params);  
     
   }

}