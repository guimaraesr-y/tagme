import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const useAuthentication = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      const docRef = doc(db, "users", user.uid);
      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          setUsername(docSnap.data().username);
        } else {
          setDoc(docRef, {
            username: user.displayName || user.email || "",
          }).then(() => {
            setUsername(user.displayName || user.email || "");
          });
        }
        setIsLoading(false);
      });
    }
  }, [user]);

  return {
    username,
    isLoading,
  };
};
