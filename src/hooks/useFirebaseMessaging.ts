import { useEffect, useState } from "react";
import { getMessaging, isSupported, Messaging } from "firebase/messaging";
import app from "@/lib/firebase";

const useFirebaseMessaging = (): Messaging | null => {
  const [messaging, setMessaging] = useState<Messaging | null>(null);

  useEffect(() => {
    const initializeMessaging = async () => {
      // Verifica se o navegador suporta Firebase Cloud Messaging
      const supported = await isSupported();
      if (supported) {
        const messagingInstance = getMessaging(app);
        setMessaging(messagingInstance);
      }
    };

    // Somente executa se estiver no cliente
    if (typeof window !== "undefined") {
      initializeMessaging();
    }
  }, []);

  return messaging;
};

export default useFirebaseMessaging;
