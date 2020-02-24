import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgSimpleAlertModule } from '../../../ng-simple-alert_demo/src/lib/ng-simple-alert_demo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgSimpleAlertModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
