import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-400 ">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24 animate-spin"></div>
    </div>
  );
};

export default LoadingPage;