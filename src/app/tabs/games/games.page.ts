import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: 'games.page.html',
  styleUrls: ['games.page.scss'],
})
export class GamesPage {
  games = [
    {
      name: 'Combination Lock',
      icon: 'lock-open-outline',
      color: 'primary',
      link: 'combination-lock',
    },
    {
      name: 'Roll a die',
      icon: 'dice-outline',
      color: 'success',
      link: 'dice',
    },
    {
      name: 'Letter shuffle',
      icon: 'text-outline',
      color: 'danger',
      link: 'letters',
    },
    {
      name: 'Word shuffle',
      icon: 'globe-outline',
      color: 'primary',
      link: 'words',
    },
    {
      name: 'Tic Tac Toe',
      icon: 'apps-outline',
      color: 'alert',
      link: 'tictactoe',
    },
    {
      name: 'More coming...',
      icon: 'code-working-outline',
    },
  ];

  constructor() {}
}
