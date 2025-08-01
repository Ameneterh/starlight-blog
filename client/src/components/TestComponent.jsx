import React from "react";

// import { ToastContainer, toast } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";

function TestComponent() {
  const notify = () => toast.success("Wow so easy!");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <Toaster />
    </div>
  );
}

export default TestComponent;
