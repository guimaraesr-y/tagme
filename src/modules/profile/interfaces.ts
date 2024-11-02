export interface ProfileInterface {
    userUid: string;
    fcmToken?: string;
    businessName?: string;
    businessDescription?: string;
    businessPicture?: string;
    clientsCount: number;
    notificationsCount: number;
    qrcodeScanCount: number;
}