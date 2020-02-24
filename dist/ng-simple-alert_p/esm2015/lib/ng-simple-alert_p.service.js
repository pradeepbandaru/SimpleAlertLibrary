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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2ltcGxlLWFsZXJ0X3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNpbXBsZS1hbGVydF9wX2EvIiwic291cmNlcyI6WyJsaWIvbmctc2ltcGxlLWFsZXJ0X3Auc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFL0Isd0NBSUM7OztJQUhDLG9DQUFlOztJQUNmLHFDQUFnQjs7SUFDaEIsbUNBQWM7O0FBTWhCLE1BQU0sT0FBTyxvQkFBb0I7SUFIakM7UUFJUyxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFzQixDQUFDO0tBcUIxRDs7Ozs7SUFuQlEsa0JBQWtCLENBQUMsT0FBZTtRQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7O0lBRU0saUJBQWlCLENBQUMsT0FBZTtRQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7O0lBRU0sa0JBQWtCLENBQUMsT0FBZTtRQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Ozs7O0lBRU0sZUFBZSxDQUFDLE9BQWU7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7Ozs7OztJQUVPLGtCQUFrQixDQUFDLE1BQWMsRUFBRSxPQUFlLEVBQUUsS0FBYTtRQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7WUF4QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OztJQUVDLDZDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVBbGVydE1lc3NhZ2Uge1xuICBwcmVmaXg6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBjb2xvcjogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ1NpbXBsZUFsZXJ0U2VydmljZSB7XG4gIHB1YmxpYyBhbGVydE1lc3NhZ2UkID0gbmV3IFN1YmplY3Q8U2ltcGxlQWxlcnRNZXNzYWdlPigpO1xuXG4gIHB1YmxpYyBjcmVhdGVTdWNjZXNzQWxlcnQobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5hbGVydE1lc3NhZ2UkLm5leHQodGhpcy5jcmVhdGVBbGVydE1lc3NhZ2UoJ1N1Y2Nlc3MnLCBtZXNzYWdlLCAnZ3JlZW4nKSk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlRGFuZ2VyQWxlcnQobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5hbGVydE1lc3NhZ2UkLm5leHQodGhpcy5jcmVhdGVBbGVydE1lc3NhZ2UoJ0RhbmdlcicsIG1lc3NhZ2UsICdyZWQnKSk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlV2FybmluZ0FsZXJ0KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYWxlcnRNZXNzYWdlJC5uZXh0KHRoaXMuY3JlYXRlQWxlcnRNZXNzYWdlKCdXYXJuaW5nJywgbWVzc2FnZSwgJ2RhcmtvcmFuZ2UnKSk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlSW5mb0FsZXJ0KG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYWxlcnRNZXNzYWdlJC5uZXh0KHRoaXMuY3JlYXRlQWxlcnRNZXNzYWdlKCdJbmZvJywgbWVzc2FnZSwgJ2RvZGdlcmJsdWUnKSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUFsZXJ0TWVzc2FnZShwcmVmaXg6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nKTogU2ltcGxlQWxlcnRNZXNzYWdlIHtcbiAgICByZXR1cm4geyBwcmVmaXgsIG1lc3NhZ2UsIGNvbG9yIH07XG4gIH1cbn1cbiJdfQ==