import React from "react";
import { Link } from "react-router-dom";
import { MdMarkEmailRead, MdWhatsapp, MdAddIcCall } from "react-icons/md";

export default function BookAdvert({ bookImage }) {
  return (
    <div className="group relative border h-[370px] overflow-hidden rounded-lg w-[250px] transition-all">
      <img
        src={bookImage}
        alt="post cover"
        className="object-cover object-top transition-all duration-300 z-20"
      />
      <div className="w-full z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 bg-gray-700 dark:bg-slate-900 text-white transition-all 300 text-center py-2 p-3 flex flex-col gap-2">
        <p>Contact Vendor</p>
        <div className="w-full bg-white text-slate-700 text-xl p-2 flex items-center justify-center gap-4 rounded-full">
          <Link to="mailto:ameneterh@gmail.com" className="hover:text-red-700">
            <MdMarkEmailRead />
          </Link>
          <Link to="tel:+2348154230654" className="hover:text-blue-700">
            <MdAddIcCall />
          </Link>
          <Link
            to="https://wa.me/2348154230654"
            className="hover:text-green-700"
          >
            <MdWhatsapp />
          </Link>
        </div>
      </div>
    </div>
  );
}
