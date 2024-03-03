import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";

import img1 from "../../assets/logo/svg.png";

const Registration = () => {
  const inputRef = useRef(null);

  const [error, setError] = useState("");
  const [image, setImage] = useState("");

  // console.log(image.name);

 

  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    // console.log(form.email);
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const mobile = form.mobile.value;

    console.log(email,name,password,mobile);
    
  };

  return (
    <div className="bg-slate-100 shadow-2xl  pt-24  z-12   pb-32 ">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white shadow-2xl   md:h-auto md:w-5/12 px-4 py-16  md:px-12 rounded-lg">
          <h1 className="text-4xl font-bold text-center mb-12">Sign Up</h1>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <input
                type="email "
                className="bg-white py-2 px-4 text-xl border w-full rounded-md mb-6"
                name="email"
                placeholder="User Email "
                required
              />

              <input
                type="text "
                className="bg-white py-2 px-4 text-xl border w-full rounded-md mb-6"
                name="name"
                placeholder="User Name "
                required
              />

              <input
                type="text "
                className="bg-white py-2 px-4 text-xl border w-full rounded-md mb-6"
                name="mobile"
                placeholder="Mobile "
                required
              />

              <input
                type="text "
                className="bg-white py-2 px-4 text-xl border w-full rounded-md mb-6"
                name="password"
                placeholder="User Password "
                required
              />

              <div
                onClick={handleImageClick}
                className="flex items-center gap-4 mb-4 flex-wrap md:flex-nowrap"
              >
                {image ? (
                  <>
                    <img
                      src={URL.createObjectURL(image)}
                      className="h-12 w-12 rounded-full"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    <img
                      src={img1}
                      className="h-12 w-12 rounded-full  "
                      alt=""
                    />{" "}
                  </>
                )}
                <input
                  type="file"
                  ref={inputRef}
                  onChange={handleImageChange}
                  required
                  className="cursor-pointer max-w-[200px] rounded-xl bg-gray-200 p-2 "
                />
              </div>

              <button className="bg-pink-500 w-full rounded-md py-2 text-xl text-white ">
                Register
              </button>
            </div>
          </form>

          <SocialLogin></SocialLogin>
          <div className="mt-8 ">
            <p className="text-center">
              <Link>Forgot password</Link>
            </p>
            <p className="text-center mt-4">
              ALready have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
