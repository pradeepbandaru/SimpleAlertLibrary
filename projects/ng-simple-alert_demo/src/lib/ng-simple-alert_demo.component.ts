import { Component, OnInit } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { NgSimpleAlertService, SimpleAlertMessage } from './ng-simple-alert_demo.service';

@Component({
  selector: 'ng-simple-alert_demo',
  template: `
    <div class="alert" *ngIf="alertMessage$ | async as alertMessage" [ngStyle]="{ background: alertMessage.color }">
      <span class="closebtn" (click)="closeAlert()">&times;</span>
      <strong>{{ alertMessage.prefix }}!</strong> {{ alertMessage.message }}
      <span> This is Sample Package from Pradeep Bandaru</span>
    </div>
  `,
  styleUrls: ['./ng-simple-alert_demo.component.css']
})
export class NgSimpleAlertComponent implements OnInit {
  alertMessage$: Observable<SimpleAlertMessage | boolean>;
  close$ = new Subject<boolean>();

  constructor(private alertService: NgSimpleAlertService) {}

  ngOnInit() {
    this.alertMessage$ = merge(this.alertService.alertMessage$, this.close$);
  }

  closeAlert(): void {
    this.close$.next();
  }
}
