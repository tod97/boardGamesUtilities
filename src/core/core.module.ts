import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/shared/shared.module';

const EXPORTS_COMPONENTS = [];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule.forRoot(),
  ],
  exports: [...EXPORTS_COMPONENTS],
  declarations: [...EXPORTS_COMPONENTS],
  providers: [],
})
export class CoreModule {}
