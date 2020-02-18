import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgSimpleAlertComponent } from './ng-simple-alert_p.component';

@NgModule({
  declarations: [NgSimpleAlertComponent],
  imports: [CommonModule],
  exports: [NgSimpleAlertComponent]
})
export class NgSimpleAlertModule {}
