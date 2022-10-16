import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicTacToePage } from './tictactoe.page';

const routes: Routes = [
  {
    path: '',
    component: TicTacToePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicTacToePageRoutingModule {}
