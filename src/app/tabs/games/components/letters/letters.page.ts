import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.page.html',
  styleUrls: ['./letters.page.scss'],
})
export class LettersPage implements OnInit {
  letter: string;
  avoidUnusualLetters = true;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.onChangeLetter();
  }

  onBackButtonClick() {
    this.navCtrl.navigateBack('/tabs/games');
  }

  onChangeLetter() {
    const letters = this.avoidUnusualLetters
      ? 'ABCDEFGHILMNOPQRSTUVZ'
      : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.letter = letters[Math.floor(Math.random() * letters.length)];
  }
}
