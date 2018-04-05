import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  message: string;
  showLoader: boolean;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.messageUpdated.subscribe(message => {
      this.message = message || 'Please Wait';
    });

    this.showLoader = this.loaderService.loaderStatusUpdated.subscribe(status => {
      this.showLoader = status;
    });
    this.showLoader = false;
  }

}
