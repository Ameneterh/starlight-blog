import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          Jesus is Knocking at the door of your heart!
        </h2>
        <p className="text-gray-500 my-2">
          "Behold, I stand at the door, and knock: if any man hear my voice, and
          open the door, I will come in to him, and will sup with him, and he
          with me."
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-md hover:opacity-80 hover:bg-blue-400"
          to="/receive-christ"
          // target="_blank"
          // rel="noopener noreferrer"
          as={Link}
        >
          Answer the Door
        </Button>
      </div>
      <div className="flex-1 p-7">
        <img
          src="https://miro.medium.com/v2/resize:fit:1000/1*YHoq2cMk0yjvI6mz8QI3Rg.jpeg"
          alt="Jesus knocking at the door"
        />
      </div>
    </div>
  );
}
