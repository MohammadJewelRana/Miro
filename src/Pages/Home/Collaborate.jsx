import React from "react";

import { Link } from "react-router-dom";

const Collaborate = () => {
  return (
    <div className="my-32">
      <div className="relative">
        <h1 className="text-center text-5xl font-bold mx-auto max-w-2xl">
          Collaborate without constraints
        </h1>

        <div className="absolute top-0 right-0 bg-yellow-500 px-4 py-1 rounded-lg transform rotate-12 origin-top-right     text-center">
          <p className="font-bold text-[12px]">YOUR IDEA STARTS HERE</p>
        </div>
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 mt-4 p-3  lg:max-w-7xl  mx-auto   ">

        <div className="  p-6">
          <h1 className="text-2xl font-bold mb-6">Free forever</h1>
          <p className="opacity-75 text-lg text-justify  ">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our
            <span className="text-blue-600 px-2">
              {" "}
              <Link to="">pricing plans</Link>
            </span>{" "}
            for more features.
          </p>
        </div>
        <div className="  p-6">
          <h1 className="text-2xl font-bold mb-6">Easy integrations</h1>
          <p className="opacity-75 text-lg text-justify">
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our
            <span className="text-blue-600 px-2">
              {" "}
              <Link to="">Marketplace </Link>.
            </span>
          </p>
        </div>
        <div className="  p-6">
          <h1 className="text-2xl font-bold mb-6">Security first</h1>
          <p className="opacity-75 text-lg text-justify">
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our
            <span className="text-blue-600 px-2">
              {" "}
              <Link>Trust Center.</Link>
            </span>
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex items-center gap-4 mx-auto bg-blue-600 py-3 text-white px-8 text-xl rounded-l-full rounded-r-full transition-all duration-300 hover:bg-blue-500 cursor-pointer">
          <button>Sign up free </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
