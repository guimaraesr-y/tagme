'use server';

import { messaging } from "../lib/firebase-admin";

export const sendNotification = async (data: { token: string; title: string; message: string }) => {
  const { token, title, message } = data;

  const notificationMessage = {
    token, 
    notification: {
      title,
      body: message,
    },
  };

  try {
    await messaging.send(notificationMessage);
    return { success: true };
  } catch (error) {
    console.error('Error sending notification:', error);
    return { success: false };
  }
};

