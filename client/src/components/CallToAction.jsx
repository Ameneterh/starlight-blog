import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="bg-cover bg-center bg-[url('https://miro.medium.com/v2/resize:fit:1000/1*YHoq2cMk0yjvI6mz8QI3Rg.jpeg')] flex flex-col p-3 rounded-lg md:rounded-3xl text-center max-w-3xl h-96 mx-auto justify-end">
      <div className="justify-center flex flex-col max-w-md mx-auto">
        <h2 className="text-2xl font-extrabold text-white">
          Jesus is Knocking at the door of your heart!
        </h2>
        <p className="text-gray-300 my-2">
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
    </div>
  );
}
