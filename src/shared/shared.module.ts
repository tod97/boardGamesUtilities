import { CommonModule, DatePipe } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

const SHARED_MODULES = [
  IonicModule,
  RouterModule,
  FormsModule,
  CommonModule,
  TranslateModule,
];
const SHARED_COMPONENTS = [];
const PROVIDERS = [DatePipe];

@NgModule({
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS],
  declarations: [...SHARED_COMPONENTS],
  providers: [...PROVIDERS],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
