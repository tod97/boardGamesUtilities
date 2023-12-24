import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesPage } from './games.page';

const routes: Routes = [
  {
    path: '',
    component: GamesPage,
  },
  {
    path: 'combination-lock',
    loadChildren: () =>
      import('../../games/combination-lock/combination-lock.module').then(
        (m) => m.CombinationLockPageModule
      ),
  },
  {
    path: 'dice',
    loadChildren: () =>
      import('../../games/dice/dice.module').then((m) => m.DicePageModule),
  },
  {
    path: 'letters',
    loadChildren: () =>
      import('../../games/letters/letters.module').then(
        (m) => m.LettersPageModule
      ),
  },
  {
    path: 'tictactoe',
    loadChildren: () =>
      import('../../games/tictactoe/tictactoe.module').then(
        (m) => m.TicTacToePageModule
      ),
  },
  {
    path: 'words',
    loadChildren: () =>
      import('../../games/words/words.module').then((m) => m.WordsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesPageRoutingModule {}
