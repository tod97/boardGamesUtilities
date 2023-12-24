import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CombinationLockPage } from './combination-lock.page';

const routes: Routes = [
  {
    path: '',
    component: CombinationLockPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombinationLockPageRoutingModule {}
