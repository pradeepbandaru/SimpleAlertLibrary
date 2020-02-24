/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-simple-alert_p.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { NgSimpleAlertService } from './ng-simple-alert_p.service';
var NgSimpleAlertComponent = /** @class */ (function () {
    function NgSimpleAlertComponent(alertService) {
        this.alertService = alertService;
        this.close$ = new Subject();
    }
    /**
     * @return {?}
     */
    NgSimpleAlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.alertMessage$ = merge(this.alertService.alertMessage$, this.close$);
    };
    /**
     * @return {?}
     */
    NgSimpleAlertComponent.prototype.closeAlert = /**
     * @return {?}
     */
    function () {
        this.close$.next();
    };
    NgSimpleAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-simple-alert_p',
                    template: "\n    <div class=\"alert\" *ngIf=\"alertMessage$ | async as alertMessage\" [ngStyle]=\"{ background: alertMessage.color }\">\n      <span class=\"closebtn\" (click)=\"closeAlert()\">&times;</span>\n      <strong>{{ alertMessage.prefix }}!</strong> {{ alertMessage.message }}\n      <span> This is Sample Package from Pradeep Bandaru</span>\n    </div>\n  ",
                    styles: [".alert{padding:20px;color:#fff}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.closebtn:hover{color:#000}"]
                }] }
    ];
    /** @nocollapse */
    NgSimpleAlertComponent.ctorParameters = function () { return [
        { type: NgSimpleAlertService }
    ]; };
    return NgSimpleAlertComponent;
}());
export { NgSimpleAlertComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2ltcGxlLWFsZXJ0X3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctc2ltcGxlLWFsZXJ0X3BfYS8iLCJzb3VyY2VzIjpbImxpYi9uZy1zaW1wbGUtYWxlcnRfcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBc0IsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RjtJQWVFLGdDQUFvQixZQUFrQztRQUFsQyxpQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFGdEQsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7SUFFeUIsQ0FBQzs7OztJQUUxRCx5Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7OztJQUVELDJDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Z0JBdkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUscVdBTVQ7O2lCQUVGOzs7O2dCQVpRLG9CQUFvQjs7SUEwQjdCLDZCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FiWSxzQkFBc0I7OztJQUNqQywrQ0FBd0Q7O0lBQ3hELHdDQUFnQzs7Ozs7SUFFcEIsOENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ1NpbXBsZUFsZXJ0U2VydmljZSwgU2ltcGxlQWxlcnRNZXNzYWdlIH0gZnJvbSAnLi9uZy1zaW1wbGUtYWxlcnRfcC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctc2ltcGxlLWFsZXJ0X3AnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbGVydFwiICpuZ0lmPVwiYWxlcnRNZXNzYWdlJCB8IGFzeW5jIGFzIGFsZXJ0TWVzc2FnZVwiIFtuZ1N0eWxlXT1cInsgYmFja2dyb3VuZDogYWxlcnRNZXNzYWdlLmNvbG9yIH1cIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VidG5cIiAoY2xpY2spPVwiY2xvc2VBbGVydCgpXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgIDxzdHJvbmc+e3sgYWxlcnRNZXNzYWdlLnByZWZpeCB9fSE8L3N0cm9uZz4ge3sgYWxlcnRNZXNzYWdlLm1lc3NhZ2UgfX1cbiAgICAgIDxzcGFuPiBUaGlzIGlzIFNhbXBsZSBQYWNrYWdlIGZyb20gUHJhZGVlcCBCYW5kYXJ1PC9zcGFuPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9uZy1zaW1wbGUtYWxlcnRfcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdTaW1wbGVBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFsZXJ0TWVzc2FnZSQ6IE9ic2VydmFibGU8U2ltcGxlQWxlcnRNZXNzYWdlIHwgYm9vbGVhbj47XG4gIGNsb3NlJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IE5nU2ltcGxlQWxlcnRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWxlcnRNZXNzYWdlJCA9IG1lcmdlKHRoaXMuYWxlcnRTZXJ2aWNlLmFsZXJ0TWVzc2FnZSQsIHRoaXMuY2xvc2UkKTtcbiAgfVxuXG4gIGNsb3NlQWxlcnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZSQubmV4dCgpO1xuICB9XG59XG4iXX0=