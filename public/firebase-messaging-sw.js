
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyB_yosFA2V_T-BSxgiE09ExNAi6seQIY1M',
  authDomain: 'tagme-d0a67.firebaseapp.com',
  projectId: 'tagme-d0a67',
  storageBucket: 'tagme-d0a67.appspot.com',
  messagingSenderId: '845612754575',
  appId: '1:845612754575:web:bce547bed439c97dc632fa',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
