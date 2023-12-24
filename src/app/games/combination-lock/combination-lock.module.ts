import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CombinationLockPageRoutingModule } from './combination-lock-routing.module';

import { CombinationLockPage } from './combination-lock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CombinationLockPageRoutingModule,
  ],
  declarations: [CombinationLockPage],
})
export class CombinationLockPageModule {}
