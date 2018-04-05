import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LoaderService {
  loaderStatus = false;
  loaderStatusUpdated: EventEmitter<boolean> = new EventEmitter();
  message = null;
  messageUpdated: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.loaderStatusUpdated.emit(this.loaderStatus);
   }

  showLoader(msg: string) {
    this.message = msg;
    this.loaderStatus = true;
    this.messageUpdated.emit(this.message);
    this.loaderStatusUpdated.emit(this.loaderStatus);
  }

  hideLoader() {
    this.message = null;
    this.messageUpdated.emit(this.message);
    this.loaderStatus = false;
    this.loaderStatusUpdated.emit(this.loaderStatus);
  }

}
