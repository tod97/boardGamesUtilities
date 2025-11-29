import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesPage } from './games.page';
import { CombinationLockPage } from 'src/app/tabs/games/components/combination-lock/combination-lock.page';
import { DicePage } from 'src/app/tabs/games/components/dice/dice.page';
import { LettersPage } from 'src/app/tabs/games/components/letters/letters.page';
import { TicTacToePage } from 'src/app/tabs/games/components/tictactoe/tictactoe.page';
import { WordsPage } from 'src/app/tabs/games/components/words/words.page';
import { SecretSantaPage } from 'src/app/tabs/games/components/secretsanta/secretsanta.page';

const routes: Routes = [
  {
    path: '',
    component: GamesPage,
  },
  {
    path: 'combination-lock',
    component: CombinationLockPage,
  },
  {
    path: 'dice',
    component: DicePage,
  },
  {
    path: 'letters',
    component: LettersPage,
  },
  {
    path: 'tictactoe',
    component: TicTacToePage,
  },
  {
    path: 'words',
    component: WordsPage,
  },
  {
    path: 'secretsanta',
    component: SecretSantaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesPageRoutingModule {}
