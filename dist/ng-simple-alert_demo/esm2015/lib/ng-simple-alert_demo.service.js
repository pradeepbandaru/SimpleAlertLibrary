/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-simple-alert_demo.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function SimpleAlertMessage() { }
if (false) {
    /** @type {?} */
    SimpleAlertMessage.prototype.prefix;
    /** @type {?} */
    SimpleAlertMessage.prototype.message;
    /** @type {?} */
    SimpleAlertMessage.prototype.color;
}
export class NgSimpleAlertService {
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
/** @nocollapse */ NgSimpleAlertService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgSimpleAlertService_Factory() { return new NgSimpleAlertService(); }, token: NgSimpleAlertService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgSimpleAlertService.prototype.alertMessage$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2ltcGxlLWFsZXJ0X2RlbW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNpbXBsZS1hbGVydF9kZW1vLyIsInNvdXJjZXMiOlsibGliL25nLXNpbXBsZS1hbGVydF9kZW1vLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBRS9CLHdDQUlDOzs7SUFIQyxvQ0FBZTs7SUFDZixxQ0FBZ0I7O0lBQ2hCLG1DQUFjOztBQU1oQixNQUFNLE9BQU8sb0JBQW9CO0lBSGpDO1FBSVMsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBc0IsQ0FBQztLQXFCMUQ7Ozs7O0lBbkJRLGtCQUFrQixDQUFDLE9BQWU7UUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7OztJQUVNLGlCQUFpQixDQUFDLE9BQWU7UUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7OztJQUVNLGtCQUFrQixDQUFDLE9BQWU7UUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDOzs7OztJQUVNLGVBQWUsQ0FBQyxPQUFlO1FBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7Ozs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxNQUFjLEVBQUUsT0FBZSxFQUFFLEtBQWE7UUFDdkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7O1lBeEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7SUFFQyw2Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2ltcGxlQWxlcnRNZXNzYWdlIHtcbiAgcHJlZml4OiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgY29sb3I6IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdTaW1wbGVBbGVydFNlcnZpY2Uge1xuICBwdWJsaWMgYWxlcnRNZXNzYWdlJCA9IG5ldyBTdWJqZWN0PFNpbXBsZUFsZXJ0TWVzc2FnZT4oKTtcblxuICBwdWJsaWMgY3JlYXRlU3VjY2Vzc0FsZXJ0KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYWxlcnRNZXNzYWdlJC5uZXh0KHRoaXMuY3JlYXRlQWxlcnRNZXNzYWdlKCdTdWNjZXNzJywgbWVzc2FnZSwgJ2dyZWVuJykpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZURhbmdlckFsZXJ0KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYWxlcnRNZXNzYWdlJC5uZXh0KHRoaXMuY3JlYXRlQWxlcnRNZXNzYWdlKCdEYW5nZXInLCBtZXNzYWdlLCAncmVkJykpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZVdhcm5pbmdBbGVydChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmFsZXJ0TWVzc2FnZSQubmV4dCh0aGlzLmNyZWF0ZUFsZXJ0TWVzc2FnZSgnV2FybmluZycsIG1lc3NhZ2UsICdkYXJrb3JhbmdlJykpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZUluZm9BbGVydChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmFsZXJ0TWVzc2FnZSQubmV4dCh0aGlzLmNyZWF0ZUFsZXJ0TWVzc2FnZSgnSW5mbycsIG1lc3NhZ2UsICdkb2RnZXJibHVlJykpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVBbGVydE1lc3NhZ2UocHJlZml4OiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFNpbXBsZUFsZXJ0TWVzc2FnZSB7XG4gICAgcmV0dXJuIHsgcHJlZml4LCBtZXNzYWdlLCBjb2xvciB9O1xuICB9XG59XG4iXX0=