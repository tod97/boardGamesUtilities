import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-combination-lock',
  templateUrl: './combination-lock.page.html',
  styleUrls: ['./combination-lock.page.scss'],
})
export class CombinationLockPage implements OnInit, OnDestroy {
  lang = 'it';
  langs = ['it', 'en'];
  time = 60;
  times = [60, 90, 120];
  remainingTime: number;
  interval: any;
  points = 0;
  remainingSkips = 3;
  usedWords: string[] = [];

  word: string;
  dictionaries: { [key: string]: string[] } = {};
  state: EState = EState.INIT;

  EState = EState;

  constructor(
    private translate: TranslateService,
    private commonService: CommonService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.commonService.showTimer = false;
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
    });
  }

  ngOnDestroy() {
    this.commonService.showTimer = true;
  }

  onBackButtonClick() {
    this.navCtrl.navigateBack('/tabs/games');
  }

  onChangeWord() {
    this.word =
      this.dictionaries[this.lang][
        Math.floor(Math.random() * this.dictionaries[this.lang].length)
      ];
    if (this.usedWords.includes(this.word)) {
      this.onChangeWord();
    }
    this.usedWords.push(this.word);
  }

  onStart() {
    this.points = 0;
    this.remainingSkips = 3;
    this.remainingTime = this.time;
    this.usedWords = [];
    this.resumeGame();
  }

  onSkip() {
    this.state = EState.SKIPPED;
    this.remainingSkips--;
    this.stopTimer();
  }

  onStop() {
    this.state = EState.STOPPED;
    this.stopTimer();
  }

  onSetPoints(point: number) {
    this.points = Math.max(0, this.points + point);
    if (this.remainingTime > 0) {
      this.resumeGame();
    } else {
      this.endGame();
    }
  }

  async onReset() {
    this.stopTimer();
    const alert = await this.alertCtrl.create({
      header: this.translate.instant('GAMES.RESET_ALERT.TITLE'),
      message: this.translate.instant('GAMES.RESET_ALERT.MESSAGE'),
      buttons: [
        {
          text: this.translate.instant('COMMON.CANCEL'),
          role: 'cancel',
          handler: () => {
            this.resumeGame();
          },
        },
        {
          text: this.translate.instant('COMMON.CONFIRM'),
          role: 'confirm',
          handler: () => {
            this.state = EState.INIT;
          },
        },
      ],
    });

    await alert.present();
  }

  private resumeGame() {
    this.state = EState.PLAYING;
    this.onChangeWord();
    this.startTimer();
  }

  private endGame() {
    this.state = EState.END;
    this.stopTimer();
  }

  private startTimer() {
    this.interval = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime === 0) {
        this.onStop();
      }
    }, 1000);
  }

  private stopTimer() {
    clearInterval(this.interval);
  }
}

enum EState {
  INIT = 'INIT',
  PLAYING = 'PLAYING',
  SKIPPED = 'SKIPPED',
  STOPPED = 'STOPPED',
  END = 'END',
}
