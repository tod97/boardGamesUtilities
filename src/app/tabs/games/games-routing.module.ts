import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LettersPage } from 'src/app/games/letters/letters.page';
import { WordsPage } from 'src/app/games/words/words.page';
import { GamesPage } from './games.page';

const routes: Routes = [
  {
    path: '',
    component: GamesPage,
  },
  {
    path: 'letters',
    loadChildren: () =>
      import('../../games/letters/letters.module').then(
        (m) => m.LettersPageModule
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
