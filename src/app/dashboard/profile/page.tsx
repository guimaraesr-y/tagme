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
    if (loading) {
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
          toast.success('Business profile updated!', {
            position: "bottom-right",
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
          });
        });
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
    <div className="flex items-start justify-center min-h-screen bg-gray-100">
      <div className="mt-12 bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-4xl font-semibold text-blue-600 mb-6">Business Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="businessName">
              Business Name <FaInfoCircle className="inline text-gray-400 ml-1 cursor-pointer" title="The name of your business." />
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={userBusiness?.businessName ?? ""}
              onChange={handleChange}
              placeholder="Enter your business name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="businessDescription">
              Business Description <FaInfoCircle className="inline text-gray-400 ml-1 cursor-pointer" title="A short description of your business." />
            </label>
            <textarea
              id="businessDescription"
              name="businessDescription"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={userBusiness?.businessDescription ?? ""}
              onChange={handleChange}
              placeholder="Enter a brief description of your business"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-md shadow hover:shadow-lg transform hover:scale-105 transition-all duration-150 ease-out"
          >
            Save Changes
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
