'use client';

import { useState } from "react";
import { sendNotification } from "@/actions/notifications";

/**
 * Send a notification to the user with the given FCM token, title and message.
 * Test view that sends a notification to the user.
 *
 * @param {string} token - The FCM token of the user.
 * @param {string} title - The title of the notification.
 * @param {string} message - The message of the notification.
 *
 * @returns {Promise<void>}
 */
export default function Send() {
  const [token, setToken] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendNotification = async (e: React.FormEvent) => {
    e.preventDefault();

    if (token && title && message) {
      try {
        const res = await sendNotification({ token, title, message });
        console.log(res)

        alert("Notification sent!");
      } catch (error) {
        console.error(error);
        alert("Error sending notification!");
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Send Notification</h1>
      <div className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="token">
            FCM Token
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="token"
            type="text"
            value={token}
            onChange={handleTokenChange}
            placeholder="FCM Token"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Message"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSendNotification}
        >
          Send Notification
        </button>
      </div>
    </div>
  );
}
