import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.page.html',
  styleUrls: ['./dice.page.scss'],
})
export class DicePage implements OnInit {
  faces = 6;
  num: number;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.onChangeNumber();
  }

  onBackButtonClick() {
    this.navCtrl.navigateBack('/tabs/games');
  }

  onChangeNumber() {
    if (this.faces < 1 || isNaN(this.faces)) {
      this.faces = 6;
    }
    this.num = Math.floor(Math.random() * this.faces) + 1;
  }
}
