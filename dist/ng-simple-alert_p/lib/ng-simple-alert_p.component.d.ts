import { OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NgSimpleAlertService, SimpleAlertMessage } from './ng-simple-alert_p.service';
export declare class NgSimpleAlertComponent implements OnInit {
    private alertService;
    alertMessage$: Observable<SimpleAlertMessage | boolean>;
    close$: Subject<boolean>;
    constructor(alertService: NgSimpleAlertService);
    ngOnInit(): void;
    closeAlert(): void;
}
