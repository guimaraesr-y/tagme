// lib/notifications.ts
import { messaging } from './firebase';
import { getToken, onMessage } from 'firebase/messaging';

export const requestPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    console.log('Notification permission granted.');
    return true;
  } else {
    console.log('Notification permission denied.');
    return false;
  }
};

export const getFcmToken = async () => {
  try {
    const messagingInstance = await messaging;
    if (!messagingInstance) {
      throw new Error('Messaging instance not found');
    }

    const token = await getToken(messagingInstance, { vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY });
    if (token) {
      console.log('FCM Token:', token);
      // Salve o token no Firestore ou backend associado ao usuário para enviar notificações personalizadas
    } else {
      console.log('No registration token available.');
    }
  } catch (error) {
    console.error('An error occurred while retrieving token. ', error);
  }
};

export const onMessageListener = () =>
  new Promise(async (resolve) => {
    onMessage((await messaging)!, (payload) => {
      resolve(payload);
    });
  });
