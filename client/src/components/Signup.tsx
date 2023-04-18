import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="bg-slate-200 md:grid md:grid-cols-2 grid grid-cols-1 mx-auto">
      <div className="mx-auto flex-col my-auto">
        <h3 className="text-2xl font-medium leading-6 text-gray-900 my-8">
          Sign up for our newsletter
        </h3>
        <p className="mt-2 text-md leading-5 text-gray-500">
          Get the latest news and special offers.
        </p>
        <form>
          <div className="md:flex space-x-2 items-center">
            <input
              className="shadow appearance-none border rounded px-4 py-2 mt-4 text-gray-700
         focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter you email"
            />

            <button type="submit" className="btn">
              Sign up
            </button>
          </div>
        </form>

        <p className="text-sm leading-5 text-gray-500 my-8">
          We care about the protection of your data. Read our
          <Link to="/" className="font-medium text-gray-900 underline">
            &nbsp;Privacy Policy.
          </Link>
        </p>
      </div>

      <div>
        <img src="/assets/signup.jpg" alt="signup" className="h-96 object-cover w-full"/>
      </div>
    </div>
  );
}

export default Signup;
