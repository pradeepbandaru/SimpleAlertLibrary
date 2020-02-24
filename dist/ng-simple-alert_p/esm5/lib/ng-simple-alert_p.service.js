/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-simple-alert_p.service.ts
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
var NgSimpleAlertService = /** @class */ (function () {
    function NgSimpleAlertService() {
        this.alertMessage$ = new Subject();
    }
    /**
     * @param {?} message
     * @return {?}
     */
    NgSimpleAlertService.prototype.createSuccessAlert = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.alertMessage$.next(this.createAlertMessage('Success', message, 'green'));
    };
    /**
     * @param {?} message
     * @return {?}
     */
    NgSimpleAlertService.prototype.createDangerAlert = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.alertMessage$.next(this.createAlertMessage('Danger', message, 'red'));
    };
    /**
     * @param {?} message
     * @return {?}
     */
    NgSimpleAlertService.prototype.createWarningAlert = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.alertMessage$.next(this.createAlertMessage('Warning', message, 'darkorange'));
    };
    /**
     * @param {?} message
     * @return {?}
     */
    NgSimpleAlertService.prototype.createInfoAlert = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.alertMessage$.next(this.createAlertMessage('Info', message, 'dodgerblue'));
    };
    /**
     * @private
     * @param {?} prefix
     * @param {?} message
     * @param {?} color
     * @return {?}
     */
    NgSimpleAlertService.prototype.createAlertMessage = /**
     * @private
     * @param {?} prefix
     * @param {?} message
     * @param {?} color
     * @return {?}
     */
    function (prefix, message, color) {
        return { prefix: prefix, message: message, color: color };
    };
    NgSimpleAlertService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ NgSimpleAlertService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgSimpleAlertService_Factory() { return new NgSimpleAlertService(); }, token: NgSimpleAlertService, providedIn: "root" });
    return NgSimpleAlertService;
}());
export { NgSimpleAlertService };
if (false) {
    /** @type {?} */
    NgSimpleAlertService.prototype.alertMessage$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2ltcGxlLWFsZXJ0X3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNpbXBsZS1hbGVydF9wLyIsInNvdXJjZXMiOlsibGliL25nLXNpbXBsZS1hbGVydF9wLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBRS9CLHdDQUlDOzs7SUFIQyxvQ0FBZTs7SUFDZixxQ0FBZ0I7O0lBQ2hCLG1DQUFjOztBQUdoQjtJQUFBO1FBSVMsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBc0IsQ0FBQztLQXFCMUQ7Ozs7O0lBbkJRLGlEQUFrQjs7OztJQUF6QixVQUEwQixPQUFlO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7Ozs7SUFFTSxnREFBaUI7Ozs7SUFBeEIsVUFBeUIsT0FBZTtRQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7O0lBRU0saURBQWtCOzs7O0lBQXpCLFVBQTBCLE9BQWU7UUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDOzs7OztJQUVNLDhDQUFlOzs7O0lBQXRCLFVBQXVCLE9BQWU7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7Ozs7OztJQUVPLGlEQUFrQjs7Ozs7OztJQUExQixVQUEyQixNQUFjLEVBQUUsT0FBZSxFQUFFLEtBQWE7UUFDdkUsT0FBTyxFQUFFLE1BQU0sUUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Z0JBeEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzsrQkFYRDtDQWtDQyxBQXpCRCxJQXlCQztTQXRCWSxvQkFBb0I7OztJQUMvQiw2Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2ltcGxlQWxlcnRNZXNzYWdlIHtcbiAgcHJlZml4OiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgY29sb3I6IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdTaW1wbGVBbGVydFNlcnZpY2Uge1xuICBwdWJsaWMgYWxlcnRNZXNzYWdlJCA9IG5ldyBTdWJqZWN0PFNpbXBsZUFsZXJ0TWVzc2FnZT4oKTtcblxuICBwdWJsaWMgY3JlYXRlU3VjY2Vzc0FsZXJ0KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYWxlcnRNZXNzYWdlJC5uZXh0KHRoaXMuY3JlYXRlQWxlcnRNZXNzYWdlKCdTdWNjZXNzJywgbWVzc2FnZSwgJ2dyZWVuJykpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZURhbmdlckFsZXJ0KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYWxlcnRNZXNzYWdlJC5uZXh0KHRoaXMuY3JlYXRlQWxlcnRNZXNzYWdlKCdEYW5nZXInLCBtZXNzYWdlLCAncmVkJykpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZVdhcm5pbmdBbGVydChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmFsZXJ0TWVzc2FnZSQubmV4dCh0aGlzLmNyZWF0ZUFsZXJ0TWVzc2FnZSgnV2FybmluZycsIG1lc3NhZ2UsICdkYXJrb3JhbmdlJykpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZUluZm9BbGVydChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmFsZXJ0TWVzc2FnZSQubmV4dCh0aGlzLmNyZWF0ZUFsZXJ0TWVzc2FnZSgnSW5mbycsIG1lc3NhZ2UsICdkb2RnZXJibHVlJykpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVBbGVydE1lc3NhZ2UocHJlZml4OiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IFNpbXBsZUFsZXJ0TWVzc2FnZSB7XG4gICAgcmV0dXJuIHsgcHJlZml4LCBtZXNzYWdlLCBjb2xvciB9O1xuICB9XG59XG4iXX0=