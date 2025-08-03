import { Button } from "flowbite-react";
import React, { useState } from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";

export default function ContactPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [publishError, setPublishError] = useState(null);
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      setLoading(true);
      const res = await fetch("/api/contact/new-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        setLoading(false);
        setPublishError(data.message);
        return;
      }
      if (res.ok) {
        navigate("/");
        toast.success("Your message has been sent successfully");
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
    <div className="min-h-screen w-full max-w-xl mx-auto flex flex-col items-center justify-center">
      <div className="w-full mx-auto text-justify flex flex-col">
        <p className="text-slate-700 w-full text-center">Contact</p>
        <h1 className="flex flex-col items-center w-full mb-2 md:mb-4 md:pb-4">
          <img
            src="./apple-touch-icon.png"
            alt="starlight magazine image"
            className="w-[250px] "
          />
          <span className="text-red-500 mt-3">
            shining the light, enriching the soul
          </span>
        </h1>
        <p className="text-center mb-4">We would love to hear from you</p>
        <div className="flex items-center justify-center gap-4 mb-4">
          <Link to="https://www.facebook.com/amenest">
            <BsFacebook className="hover:text-blue-500 hover:scale-125 transition-all duration-300" />
          </Link>
          {/* <Link to="#">
            <BsInstagram className="hover:text-blue-500 hover:scale-125 transition-all duration-300" />
          </Link> */}
          <Link to="https://www.twitter.com/ameneterh">
            <BsTwitter className="hover:text-blue-500 hover:scale-125 transition-all duration-300" />
          </Link>
          <Link to="https://wa.me/2348154230654">
            <BsWhatsapp className="hover:text-blue-500 hover:scale-125 transition-all duration-300" />
          </Link>
          <Link to="tel:+2348154230654">
            <MdAddCall className="hover:text-blue-500 hover:scale-125 transition-all duration-300" />
          </Link>
        </div>
        <div className="w-full flex flex-col max-w-xl mx-auto min-h-56 mb-5 px-2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter your full name"
              className="w-full rounded border border-gray-300"
              onChange={(e) =>
                setFormData({ ...formData, fullname: e.target.value })
              }
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full rounded border border-gray-300"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Enter your message"
              className="w-full rounded border border-gray-300"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full p-2 text-lg bg-gray-500 hover:bg-opacity-75 text-center transition-all duration-300 rounded-md text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
