import React from "react";

function Hero() {
  return (
    <div className="bg-slate-50 bg-hero-image h-[60vh]">
      <div className="flex flex-col">
        <div className="md:self-end mt-20 md:p-10 max-w-3xl">
          <div className="m-2 mt-10">
            <h2 className="text-2xl font-bold sm:text-3xl, md:text-4xl text-white md:text-black">
              NEW FENTY BEAUTY HELLA THICC MASCARA!
            </h2>

            <p className="text-2xl my-4 font-medium text-white md:text-black">
              Discover with 399TL Introductory Price!
            </p>

            <button className=" bg-rose-600 text-white px-8 py-2 rounded-md uppercase m-auto">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
