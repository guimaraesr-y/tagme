'use client';

import { useAuth } from "@/context/AuthContext";
import useFcmToken from "@/hooks/useFcmToken";
import { useEffect } from "react";

const Dashboard = () => {
  const { fcmToken, notificationPermissionStatus } = useFcmToken();
  fcmToken && console.log('FCM token:', fcmToken);
  
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard