import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-games',
  templateUrl: 'games.page.html',
  styleUrls: ['games.page.scss'],
})
export class GamesPage {
  games = [
    {
      name: this.translate.instant('GAMES.COMBINATION_LOCK'),
      icon: 'lock-open-outline',
      color: 'primary',
      link: 'combination-lock',
    },
    {
      name: this.translate.instant('GAMES.ROLL_DICE'),
      icon: 'dice-outline',
      color: 'success',
      link: 'dice',
    },
    {
      name: this.translate.instant('GAMES.LETTER_SHUFFLE'),
      icon: 'text-outline',
      color: 'danger',
      link: 'letters',
    },
    {
      name: this.translate.instant('GAMES.WORD_SHUFFLE'),
      icon: 'globe-outline',
      color: 'primary',
      link: 'words',
    },
    {
      name: this.translate.instant('GAMES.TIC_TAC_TOE'),
      icon: 'apps-outline',
      color: 'alert',
      link: 'tictactoe',
    },
    {
      name: this.translate.instant('GAMES.MORE_COMING_SOON'),
      icon: 'code-working-outline',
    },
  ];

  constructor(private translate: TranslateService) {}
}
