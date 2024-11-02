import { useState } from "react";
import { auth } from "@/lib/firebase";

import * as businessActions from "@/actions/business";
import { BusinessInterface } from "@/modules/business/interfaces";
import { LocalStorageCache } from "@/utils/localStorage";

export const useBusiness = () => {
  const [loading, setLoading] = useState(false);
  const idToken = auth.currentUser?.getIdToken(true);

  const cache = new LocalStorageCache();

  const getBusiness = async (): Promise<BusinessInterface | null> => {
    setLoading(true);

    return new Promise(async (resolve, reject) => {
      businessActions.getBusiness(await idToken!)
        .then((business) => {
          cache.save("business", business);
          resolve(business);
        })
        .finally(() => {
          setLoading(false);
        });
    })
  }

  const setBusiness = async (business: BusinessInterface) => {
    setLoading(true);
    businessActions.setBusiness(await idToken!, business)
      .finally(() => {
        setLoading(false);
        cache.save("business", business);
      });
  }

  return {
    getBusiness,
    setBusiness,
    loading,
  };
};
