import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = () => {
  const notify = () => {
    toast.success("Hello, world!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    toast.error("Hello, world!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    toast.promise("Hello, world!", {
      position: "bottom-left",
      pending: "Promise is pending",
      success: "Promise  Loaded",
      error: "error",
    });
  };
  return (
    <div>
      <button onClick={notify}>Click me</button>
      <ToastContainer />
    </div>
  );
};

export default Toaster;
