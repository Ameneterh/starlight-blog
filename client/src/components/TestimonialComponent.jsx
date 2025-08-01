import React from "react";

export default function TestimonialComponent({
  id,
  name,
  avatar,
  testimony,
  location,
}) {
  return (
    <section className="w-full max-w-xl p-3 md:p-8 mx-auto bg-white rounded-lg shadow-lg flex flex-col items-center justify-between">
      <img src={avatar} alt={name} className="w-24 md:w-36 rounded-full mb-4" />
      <p className="text-xs md:text-sm">{testimony}</p>
      <p className="mt-6 font-extrabold text-lg">
        {name}
        <span className="block font-extralight text-sm">{location}</span>
      </p>
    </section>
  );
}
