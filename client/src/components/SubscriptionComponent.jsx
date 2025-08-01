// import { images } from "../assets/images.js";

import { useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiNavigation } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "./Spinner";

export default function SubscriptionComponent() {
  const [loading, setLoading] = useState(false);
  const [publishError, setPublishError] = useState(null);
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/subscribe/new-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setFormData({});

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        setLoading(false);
        setPublishError(data.message);
        return;
      }
      if (res.ok) {
        toast.success("You have subscribed successfully");
        setLoading(false);
        setPublishError(null);
      }
    } catch (error) {
      setPublishError("Something went wrong");
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className="mt-4 mb-10 md:px-4 w-full max-w-4xl mx-auto flex flex-col items-center">
      <form
        className="flex items-center justify-between gap-1 mt-4 w-full max-w-md bg-white border border-gray-500 rounded-full p-2 shadow-md"
        onSubmit={handleSubmit}
      >
        <MdOutlineAlternateEmail className="" />
        <input
          type="text"
          placeholder="Enter your email"
          className="flex-1 w-full text-xs md:text-sm text-black font-extralight p-1 outline-none border-none ring-0 focus:outline-none focus:border-none focus:ring-0 px-1 rounded-full"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button
          type="submit"
          className="bg-black text-white hover:opacity-85 p-2 rounded-full my-0 flex items-center justify-center"
        >
          <FiNavigation />
        </button>
      </form>
      {publishError ? (
        <p className="p-2 text-center bg-red-100 text-red-600 w-full max-w-md mt-4 rounded-lg">
          {publishError}
        </p>
      ) : (
        <p className="p-2 text-center mt-4"></p>
      )}
      {/* </div> */}
    </div>
  );
}
