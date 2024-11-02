export interface BusinessInterface {
    id?: string;
    userUid: string;
    businessName?: string;
    businessDescription?: string;
    businessPicture?: string;
    clientsCount: number;
    notificationsCount: number;
    qrcodeScanCount: number;
}