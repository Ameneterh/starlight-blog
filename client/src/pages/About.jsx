import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-justify">
        <div className="">
          <p className="text-slate-700 w-full text-center">About</p>
          <h1 className="flex flex-col items-center w-full mb-4 border-b border-black pb-4">
            <img
              src="./apple-touch-icon.png"
              alt="starlight magazine image"
              className="w-[250px] "
            />
            <span className="text-red-500 mt-3">
              shining the light, enriching the soul
            </span>
          </h1>

          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              corporis tempora ullam aut ipsam facere vel quis nostrum nisi odit
              saepe unde aliquid, debitis possimus soluta dignissimos eum, ea
              doloremque! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Necessitatibus similique magnam quibusdam ullam quidem
              alias! Cupiditate atque modi veritatis? Id inventore, provident
              animi laboriosam neque aperiam error cumque blanditiis distinctio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sed
              voluptatum, officia accusamus veniam iste laudantium
              exercitationem velit iure aliquam accusantium deleniti inventore
              tenetur! Praesentium odio ab cupiditate fugit inventore?Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum
              voluptas iure. Praesentium officiis culpa, deleniti libero
              obcaecati minima deserunt vero eligendi incidunt cupiditate
              molestiae, ab sit, numquam error laboriosam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sit harum, nobis aspernatur error rerum vel aperiam
              velit possimus iure, consequuntur quaerat quam animi! Porro vitae
              molestiae quo ab facilis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
