import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: 'games.page.html',
  styleUrls: ['games.page.scss'],
})
export class GamesPage {
  games = [
    {
      name: 'Letter generator',
      icon: 'shuffle-outline',
      color: 'danger',
      link: 'letters',
    },
    {
      name: 'Word generator',
      icon: 'globe-outline',
      color: 'primary',
      link: 'words',
    },
    {
      name: 'More coming...',
      icon: 'code-working-outline',
    },
  ];

  constructor() {}
}
