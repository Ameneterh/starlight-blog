import { Button } from "flowbite-react";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="w-full mx-auto text-justify">
        <p className="text-slate-700 w-full text-center">About</p>
        <h1 className="flex flex-col items-center w-full mb-4 pb-4">
          <img
            src="./apple-touch-icon.png"
            alt="starlight magazine image"
            className="w-[250px] "
          />
          <span className="text-red-500 mt-3">
            shining the light, enriching the soul
          </span>
        </h1>
        <div className="flex flex-col max-w-xl mx-auto min-h-56 mb-5 px-2">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter your full name"
              className="w-full rounded border border-gray-300"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full rounded border border-gray-300"
            />
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Enter your message"
              className="w-full rounded border border-gray-300"
            />

            <Button>Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
