import { BusinessInterface } from "./interfaces";

export class Business implements BusinessInterface {

  id?: string;
  userUid: string;
  fcmToken?: string;
  businessName?: string;
  businessDescription?: string;
  businessPicture?: string;

  clientsCount: number;
  notificationsCount: number;
  qrcodeScanCount: number;

  constructor(
    id: string = '',
    userUid: string,
    fcmToken?: string,
    businessName?: string,
    businessDescription?: string,
    businessPicture?: string,
    clientsCount: number = 0,
    notificationsCount: number = 0,
    qrcodeScanCount: number = 0
  ) {
    this.id = id;
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
   * Creates a new Business object from a given JSON object.
   *
   * @param {{
   *   id: string,
   *   userUid: string,
   *   fcmToken?: string,
   *   businessName?: string,
   *   businessDescription?: string,
   *   businessPicture?: string,
   *   clientsCount?: number,
   *   notificationsCount?: number,
   *   qrcodeScanCount?: number,
   * }} json
   * The JSON object to create the Business from.
   *
   * @returns {Business}
   * A new Business object with the given data.
   */
  public static fromObject(json: any): Business {
    const business = new Business(
      json.id,
      json.userUid,
      json.fcmToken,
      json.businessName,
      json.businessDescription,
      json.businessPicture,
      json.clientsCount,
      json.notificationsCount,
      json.qrcodeScanCount
    )

    return business
  }

  public toObject(): BusinessInterface {
/**
 * Converts the current Business instance into a plain object.
 *
 * @returns {BusinessInterface}
 * An object representation of the Business instance, with fields
 * corresponding to the BusinessInterface definition.
 */
    return {
      id: this.id,
      userUid: this.userUid,
      businessName: this.businessName,
      businessDescription: this.businessDescription,
      businessPicture: this.businessPicture,
      clientsCount: this.clientsCount,
      notificationsCount: this.notificationsCount,
      qrcodeScanCount: this.qrcodeScanCount
    }
  }

  /**
   * Returns a sanitized version of the current Business instance, with
   * any undefined properties removed.
   *
   * @returns {BusinessInterface}
   * A sanitized object representation of the Business instance, with
   * only the defined properties.
   */
  public sanitize() {
    const sanitizedData = Object.fromEntries(
      Object.entries(this).filter(([_, v]) => v !== undefined)
    );

    return sanitizedData
  }

}
