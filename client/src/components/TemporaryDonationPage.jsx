import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function TemporaryDonationPage() {
  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center bg-opacity-70 backdrop-blur-[2px] drop-shadow-md p-4">
      {/* <div className="h-10 w-10 sm:h-14 sm:w-14 border-4 sm:border-[8px] border-dashed border-gray-300 border-t-transparent rounded-full animate-spin"></div> */}
      <div className="h-96 w-96 bg-white rounded-md px-2 md:px-4 flex flex-col justify-between items-center">
        <div className="text-center">
          <h1 className="font-sans text-3xl md:text-5xl text-orange-500 font-extrabold mt-4 drop-shadow-lg">
            Thank You
          </h1>
          <p className="font-bold md:text-xl">for Your Generous Heart</p>
        </div>

        <div className="text-justify flex flex-col gap-3 text-[14px] md:text-[16px]">
          <p>
            Thank you for your generous heart and willingness to support our
            Christian blog. At this time, we’re not accepting donations, but
            we’re truly grateful for your intent.
          </p>
          <p>
            If you'd like to be notified when donations open, please send us a
            quick message or email. We’ll keep you updated.
          </p>
          <p>Thank you.</p>
        </div>

        <Link
          to="/"
          className="px-8 py-2 mb-4 bg-blue-600 hover:bg-opacity-70 text-white rounded-md flex items-center gap-2 transition-all duration-300"
        >
          Return to Home <FaHome />
        </Link>
      </div>
    </div>
  );
}
