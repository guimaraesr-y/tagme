import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";
import { getAuth } from "firebase-admin/auth";

export const app = initializeApp({
    credential: applicationDefault(),
    databaseURL: 'https://tagme-d0a67.firebaseio.com'
});

export const messaging = getMessaging(app);
export const auth = getAuth(app);