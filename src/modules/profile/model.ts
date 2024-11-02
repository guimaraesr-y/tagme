import { ProfileInterface } from "./interfaces";

export class Profile implements ProfileInterface {

  userUid: string;
  fcmToken?: string;
  businessName?: string;
  businessDescription?: string;
  businessPicture?: string;

  clientsCount: number;
  notificationsCount: number;
  qrcodeScanCount: number;

  constructor(
    userUid: string,
    fcmToken?: string,
    businessName?: string,
    businessDescription?: string,
    businessPicture?: string,
    clientsCount: number = 0,
    notificationsCount: number = 0,
    qrcodeScanCount: number = 0
  ) {
    this.userUid = userUid;
    this.fcmToken = fcmToken;
    this.businessName = businessName;
    this.businessDescription = businessDescription;
    this.businessPicture = businessPicture;

    this.clientsCount = clientsCount;
    this.notificationsCount = notificationsCount;
    this.qrcodeScanCount = qrcodeScanCount;
  }

  /**
   * Creates a new `Profile` object from a JSON object.
   * @param json An object with the following properties:
   *   - `userUid`: The user's uid.
   *   - `fcmToken`: The user's FCM token.
   *   - `businessName`: The user's business name.
   *   - `businessDescription`: The user's business description.
   *   - `businessPicture`: The user's business picture.
   *   - `clientsCount`: The number of clients.
   *   - `notificationsCount`: The number of notifications.
   *   - `qrcodeScanCount`: The number of QR code scans.
   * @returns A new `Profile` object.
   */
  public static fromObject(json: any): Profile {
    const profile = new Profile(
      json.userUid,
      json.fcmToken,
      json.businessName,
      json.businessDescription,
      json.businessPicture,
      json.clientsCount,
      json.notificationsCount,
      json.qrcodeScanCount
    )

    return profile
  }

  /**
   * Returns a plain object representation of the current `Profile` instance.
   *
   * @returns An object with the following properties:
   *   - `userUid`: The user's uid.
   *   - `fcmToken`: The user's FCM token.
   *   - `businessName`: The user's business name.
   *   - `businessDescription`: The user's business description.
   *   - `businessPicture`: The user's business picture.
   *   - `clientsCount`: The number of clients.
   *   - `notificationsCount`: The number of notifications.
   *   - `qrcodeScanCount`: The number of QR code scans.
   */
  public toObject(): ProfileInterface {
    return {
      userUid: this.userUid,
      fcmToken: this.fcmToken,
      businessName: this.businessName,
      businessDescription: this.businessDescription,
      businessPicture: this.businessPicture,
      clientsCount: this.clientsCount,
      notificationsCount: this.notificationsCount,
      qrcodeScanCount: this.qrcodeScanCount
    }
  }

  /**
   * Sanitizes the data by removing any undefined properties. This is useful for when sending data to the server
   * and we want to avoid sending any unnecessary information.
   * 
   * @returns A new object with only the non-undefined properties.
   */
  public sanitize() {
    const sanitizedData = Object.fromEntries(
      Object.entries(this).filter(([_, v]) => v !== undefined)
    );

    return sanitizedData
  }

}
