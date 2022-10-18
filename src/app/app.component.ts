import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  endTime: Date;
  remainingTime: number;
  interval: any;

  constructor() {}

  startTimer(seconds) {
    this.endTime = new Date();
    this.endTime.setTime(this.endTime.getTime() + seconds * 1000);
    this.remainingTime = seconds;

    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.remainingTime = Math.ceil(
        (this.endTime.getTime() - new Date().getTime()) / 1000
      );
      if (this.remainingTime === 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  stopTimer() {
    this.endTime = undefined;
    this.remainingTime = undefined;
    clearInterval(this.interval);
  }
}
