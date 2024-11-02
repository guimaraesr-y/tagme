import { applicationDefault, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";
import { getAuth } from "firebase-admin/auth";

const adminApp = !getApps().length
  ? initializeApp({
      credential: applicationDefault(),
      databaseURL: "https://tagme-d0a67.firebaseio.com",
    })
  : getApp();

export const messaging = getMessaging(adminApp);
export const auth = getAuth(adminApp);
export default adminApp;