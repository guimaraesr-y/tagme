const fs = require('fs');
const path = require('path');

// Carregar as variáveis de ambiente do Next.js
require('dotenv').config({ path: '.env.local' });

// Template para o conteúdo do service worker
const swTemplate = `
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: '${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}',
  authDomain: '${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}',
  projectId: '${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}',
  storageBucket: '${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}',
  messagingSenderId: '${process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}',
  appId: '${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}',
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
`;

// Escrever o conteúdo no arquivo firebase-messaging-sw.js na pasta public
fs.writeFileSync(path.join(__dirname, 'public/firebase-messaging-sw.js'), swTemplate);
console.log('firebase-messaging-sw.js has been generated successfully!');
