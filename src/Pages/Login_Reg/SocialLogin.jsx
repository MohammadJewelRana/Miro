import React, { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const handleGoogleSignIn = () => {};

  return (
    <div className="mx-auto mt-12">
      <p className="mx-auto  text-center text-xl">Or SignUp using </p>
      <div className="  flex items-center justify-center gap-8 my-4 ">
        <button
          className=" border rounded-full bg-blue-500 p-4 text-white"
          title="Facebook"
        >
          <FaFacebook className="text-4xl"></FaFacebook>
        </button>

        <button
          title="Google"
          onClick={handleGoogleSignIn}
          className=" border rounded-full bg-sky-500 p-4 text-white "
        >
          <FaGoogle className="text-4xl"></FaGoogle>
        </button>
      </div>
      <div className="border -mb-4"></div>
    </div>
  );
};

export default SocialLogin;
