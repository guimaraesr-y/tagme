import { useState } from "react";
import { auth } from "@/lib/firebase";

import * as profileActions from "@/actions/profile";
import { ProfileInterface } from "@/modules/profile/interfaces";
import { LocalStorageCache } from "@/utils/localStorage";

export const useProfile = () => {
  const [loading, setLoading] = useState(false);
  const idToken = auth.currentUser?.getIdToken(true);

  const cache = new LocalStorageCache();

  const getProfile = async (): Promise<ProfileInterface | null> => {
    setLoading(true);

    return new Promise(async (resolve, reject) => {
      profileActions.getProfile(await idToken!)
        .then((profile) => {
          resolve(profile);
          cache.save("profile", profile);
        })
        .finally(() => {
          setLoading(false);
        });
    })
  }

  const setProfile = async (profile: ProfileInterface) => {
    setLoading(true);
    profileActions.setProfile(await idToken!, profile)
      .finally(() => {
        setLoading(false);
        cache.save("profile", profile);
      });
  }

  return {
    getProfile,
    setProfile,
    loading,
  };
};
