import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-words',
  templateUrl: './words.page.html',
  styleUrls: ['./words.page.scss'],
})
export class WordsPage implements OnInit {
  word: string;
  lang = 'it';
  langs = ['it', 'en'];
  dictionaries: { [key: string]: string[] } = {};

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    forkJoin(
      this.langs.map((lang) =>
        fetch(`assets/words/${lang}-words.txt`).then((response) =>
          response.status === 200
            ? response.text()
            : new Promise<string>((resolve) => resolve(''))
        )
      )
    ).subscribe((res: string[]) => {
      for (const lang of this.langs) {
        this.dictionaries[lang] = res[this.langs.indexOf(lang)].split('\n');
      }
      this.onChangeWord();
    });
  }

  onBackButtonClick() {
    this.navCtrl.navigateBack('/tabs/games');
  }

  onChangeWord() {
    this.word =
      this.dictionaries[this.lang][
        Math.floor(Math.random() * this.dictionaries[this.lang].length)
      ];
  }
}
