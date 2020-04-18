import { Component } from '@angular/core';
import { SpinnerService } from '@nrdworkspace/spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-template';
  constructor(private spinnerService: SpinnerService) {
    // spinner dummy example
    setTimeout(() => {
      this.spinnerService.start();
    }, 1000);

    setTimeout(() => {
      this.spinnerService.stop();
    }, 5000);
  }
}
