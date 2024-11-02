'use client';

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { FaInfoCircle } from "react-icons/fa";
import { useBusiness } from "@/hooks/useBusiness";
import { BusinessInterface } from "@/modules/business/interfaces";
import { toast, ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import { useCache } from "@/hooks/useCache";

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const [userBusiness, setUserBusiness] = useState<BusinessInterface | null>(null);
  const { getBusiness, setBusiness } = useBusiness();
  
  const { getCache } = useCache();

  // load userBusiness
  useEffect(() => {
    if(loading) {
      let business = getCache("business")
      setUserBusiness(business as any);
    }

    (async () => {
      if (user) {
        const business = await getBusiness();
        setUserBusiness(business);
      }
    })();
  }, [user]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (user && userBusiness) {
      setBusiness(userBusiness)
        .then(() => {
          toast('Business profile updated!', {
            position: "bottom-right",
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
          })
        })
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserBusiness((prevBusiness) => {
      if (prevBusiness) {
        return {
          ...prevBusiness,
          [event.target.name]: event.target.value,
        };
      } else {
        return { ...{} as BusinessInterface, [event.target.name]: event.target.value };
      }
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Business Profile</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2" htmlFor="businessName">
          Business Name
        </label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          className="w-full px-4 py-2 border rounded-md"
          value={userBusiness?.businessName ?? ""}
          onChange={handleChange}
        />
        
        <label className="block mb-2" htmlFor="businessDescription">
          Business Description
        </label>
        <textarea
          id="businessDescription"
          name="businessDescription"
          className="w-full px-4 py-2 border rounded-md"
          value={userBusiness?.businessDescription ?? ""}
          onChange={handleChange}
        />
        
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4"
          >
            Save
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}
