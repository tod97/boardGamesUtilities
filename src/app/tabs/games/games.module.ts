import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GamesPage } from './games.page';

import { GamesPageRoutingModule } from './games-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { CombinationLockPage } from './components/combination-lock/combination-lock.page';
import { DicePage } from './components/dice/dice.page';
import { LettersPage } from './components/letters/letters.page';
import { TicTacToePage } from './components/tictactoe/tictactoe.page';
import { WordsPage } from './components/words/words.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    FormsModule,
    GamesPageRoutingModule,
  ],
  declarations: [
    GamesPage,
    CombinationLockPage,
    DicePage,
    LettersPage,
    TicTacToePage,
    WordsPage,
  ],
})
export class GamesPageModule {}
