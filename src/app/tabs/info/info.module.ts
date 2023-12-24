import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfoPage } from './info.page';

import { InfoPageRoutingModule } from './info-routing.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    FormsModule,
    InfoPageRoutingModule,
  ],
  declarations: [InfoPage],
})
export class InfoPageModule {}
