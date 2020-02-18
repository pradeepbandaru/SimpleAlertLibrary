import { Subject } from 'rxjs';
export interface SimpleAlertMessage {
    prefix: string;
    message: string;
    color: string;
}
export declare class NgSimpleAlertService {
    alertMessage$: Subject<SimpleAlertMessage>;
    createSuccessAlert(message: string): void;
    createDangerAlert(message: string): void;
    createWarningAlert(message: string): void;
    createInfoAlert(message: string): void;
    private createAlertMessage;
}
