import React from "react";

function Signup() {
  return (
    <div className="mt-10 w-full max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center lg:mt-0">
      <div className="relative z-0">
        <div className="absolute inset-0 transform -skew-x-12 rounded-lg shadow-lg bg-blue-500"></div>
        <div className="relative z-10 w-full h-full px-4 py-5 sm:p-6 rounded-lg shadow-lg bg-white">
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Sign up for our newsletter
            </h3>
            <p className="mt-2 text-sm leading-5 text-gray-500">
              Get the latest news and special offers.
            </p>
            <form className="mt-4 sm:flex">
              <input
                aria-label="Email address"
                type="email"
                required
                className="appearance-none w-full px-5 py-3 sm:max-w-xs border border-gray-300 
        rounded-md shadow-sm placeholder-gray-400 focus:outline-none 
        focus:shadow-outline-blue focus:border-blue-500 transition duration-150 ease-in-out 
        sm:rounded-r-none sm:focus:rounded-r-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full px-5 py-3 border border-transparent 
                text-base leading-6 font-medium rounded-md
                 text-white bg-blue-500 hover:bg-blue-400 focus:outline-none 
                 focus:shadow-outline-blue transition duration-150 ease-in-out sm:px-10 sm:text-sm sm:leading-5"
                >
                  Sign up
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm leading-5 text-gray-500">
              We care about the protection of your data. Read our
              <a href="#" className="font-medium text-gray-900 underline">
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
