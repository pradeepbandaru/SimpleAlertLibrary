(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-simple-alert_demo', ['exports', '@angular/core', 'rxjs', '@angular/common'], factory) :
    (global = global || self, factory(global['ng-simple-alert_demo'] = {}, global.ng.core, global.rxjs, global.ng.common));
}(this, (function (exports, core, rxjs, common) { 'use strict';

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
    var NgSimpleAlertService = /** @class */ (function () {
        function NgSimpleAlertService() {
            this.alertMessage$ = new rxjs.Subject();
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ NgSimpleAlertService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgSimpleAlertService_Factory() { return new NgSimpleAlertService(); }, token: NgSimpleAlertService, providedIn: "root" });
        return NgSimpleAlertService;
    }());
    if (false) {
        /** @type {?} */
        NgSimpleAlertService.prototype.alertMessage$;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-simple-alert_demo.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgSimpleAlertComponent = /** @class */ (function () {
        function NgSimpleAlertComponent(alertService) {
            this.alertService = alertService;
            this.close$ = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        NgSimpleAlertComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.alertMessage$ = rxjs.merge(this.alertService.alertMessage$, this.close$);
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
            { type: core.Component, args: [{
                        selector: 'ng-simple-alert_demo',
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
    var NgSimpleAlertModule = /** @class */ (function () {
        function NgSimpleAlertModule() {
        }
        NgSimpleAlertModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgSimpleAlertComponent],
                        imports: [common.CommonModule],
                        exports: [NgSimpleAlertComponent]
                    },] }
        ];
        return NgSimpleAlertModule;
    }());

    exports.NgSimpleAlertComponent = NgSimpleAlertComponent;
    exports.NgSimpleAlertModule = NgSimpleAlertModule;
    exports.NgSimpleAlertService = NgSimpleAlertService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-simple-alert_demo.umd.js.map
