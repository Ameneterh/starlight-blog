// import { images } from "../assets/images.js";

import { useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiNavigation } from "react-icons/fi";

export default function SubscriptionComponent() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email", email);
  };
  return (
    <div className="mt-4 mb-10 md:px-4 w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* <div className="flex flex-col items-center"> */}
      {/* <img
          src={images.email_sub}
          width={60}
          className="mb-5 -mt-[45px] md:-mt-[70px]"
        /> */}
      {/* <h1 className="uppercase text-2xl text-center prata-regular mb-3">
          Newsletter <span className="text-gray-400">Subscription</span>
        </h1>
        <p className="font-extralight text-sm text-center w-full max-w-md mx-auto">
          Subscribe to our Newsletter to stay up to date on our products and
          happenings in the packaging design community
        </p> */}

      <form
        className="flex items-center justify-between gap-1 mt-4 w-full max-w-md bg-white border border-gray-500 rounded-full p-2 shadow-md"
        onSubmit={handleSubmit}
      >
        <MdOutlineAlternateEmail className="" />
        <input
          type="text"
          placeholder="Enter your email"
          className="flex-1 w-full text-xs md:text-sm text-black font-extralight p-1 outline-none border-none ring-0 focus:outline-none focus:border-none focus:ring-0 px-1 rounded-full"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white hover:opacity-85 p-2 rounded-full my-0 flex items-center justify-center"
        >
          <FiNavigation />
        </button>
      </form>
      {/* </div> */}
    </div>
  );
}
