'use client';

// components/Notifications.tsx
import { db } from "@/lib/firebase";
import { useState } from "react";

const Notifications: React.FC = () => {
  const [message, setMessage] = useState("");

  // gotta use hook
  // const sendNotification = async () => {
  //   await db.collection("notifications").add({
  //     message,
  //     createdAt: new Date(),
  //   });
  //   setMessage("");
  // };

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-xl font-semibold mb-4">Enviar Notificação</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escreva sua notificação..."
        className="w-full border rounded p-2"
      />
      <button
        onClick={() => console.log("Enviando notificação...")}
        className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
      >
        Enviar
      </button>
    </div>
  );
};

export default Notifications;

