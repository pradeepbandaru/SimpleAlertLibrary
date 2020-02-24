import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { Subject, merge } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-simple-alert_demo.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SimpleAlertMessage() { }
if (false) {
    /** @type {?} */
    SimpleAlertMessage.prototype.prefix;
    /** @type {?} */
    SimpleAlertMessage.prototype.message;
    /** @type {?} */
    SimpleAlertMessage.prototype.color;
}
class NgSimpleAlertService {
    constructor() {
        this.alertMessage$ = new Subject();
    }
    /**
     * @param {?} message
     * @return {?}
     */
    createSuccessAlert(message) {
        this.alertMessage$.next(this.createAlertMessage('Success', message, 'green'));
    }
    /**
     * @param {?} message
     * @return {?}
     */
    createDangerAlert(message) {
        this.alertMessage$.next(this.createAlertMessage('Danger', message, 'red'));
    }
    /**
     * @param {?} message
     * @return {?}
     */
    createWarningAlert(message) {
        this.alertMessage$.next(this.createAlertMessage('Warning', message, 'darkorange'));
    }
    /**
     * @param {?} message
     * @return {?}
     */
    createInfoAlert(message) {
        this.alertMessage$.next(this.createAlertMessage('Info', message, 'dodgerblue'));
    }
    /**
     * @private
     * @param {?} prefix
     * @param {?} message
     * @param {?} color
     * @return {?}
     */
    createAlertMessage(prefix, message, color) {
        return { prefix, message, color };
    }
}
NgSimpleAlertService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ NgSimpleAlertService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgSimpleAlertService_Factory() { return new NgSimpleAlertService(); }, token: NgSimpleAlertService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgSimpleAlertService.prototype.alertMessage$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-simple-alert_demo.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgSimpleAlertComponent {
    /**
     * @param {?} alertService
     */
    constructor(alertService) {
        this.alertService = alertService;
        this.close$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.alertMessage$ = merge(this.alertService.alertMessage$, this.close$);
    }
    /**
     * @return {?}
     */
    closeAlert() {
        this.close$.next();
    }
}
NgSimpleAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-simple-alert_demo',
                template: `
    <div class="alert" *ngIf="alertMessage$ | async as alertMessage" [ngStyle]="{ background: alertMessage.color }">
      <span class="closebtn" (click)="closeAlert()">&times;</span>
      <strong>{{ alertMessage.prefix }}!</strong> {{ alertMessage.message }}
      <span> This is Sample Package from Pradeep Bandaru</span>
    </div>
  `,
                styles: [".alert{padding:20px;color:#fff}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}"]
            }] }
];
/** @nocollapse */
NgSimpleAlertComponent.ctorParameters = () => [
    { type: NgSimpleAlertService }
];
if (false) {
    /** @type {?} */
    NgSimpleAlertComponent.prototype.alertMessage$;
    /** @type {?} */
    NgSimpleAlertComponent.prototype.close$;
    /**
     * @type {?}
     * @private
     */
    NgSimpleAlertComponent.prototype.alertService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-simple-alert_demo.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgSimpleAlertModule {
}
NgSimpleAlertModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgSimpleAlertComponent],
                imports: [CommonModule],
                exports: [NgSimpleAlertComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-simple-alert_demo.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgSimpleAlertComponent, NgSimpleAlertModule, NgSimpleAlertService };
//# sourceMappingURL=ng-simple-alert_demo.js.map
