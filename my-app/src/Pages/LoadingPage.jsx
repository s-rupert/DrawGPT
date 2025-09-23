import React from "react";
import Loader from "../Components/Loader";

const LoadingPage = () => {
  return (
    <div className="relative w-full h-full bg-white">
      <img
        src="../public/background.jpg"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full opacity-70"
      />
      <div className="text-5xl relative font-bold flex flex-col items-center justify-center w-full h-full text-center top-0 left-0 border-2">
        <h1 className="">DrawGPT</h1>
        <Loader />
      </div>
    </div>
  );
};

export default LoadingPage;
