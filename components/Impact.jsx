import React from "react";

const Impact = () => {
  return (
    <div className="mt-32 bg-gradient-to-br from-tertiary to-primary  border border-b-primary border-darkThree p-6 hover:bg-gradient-to-tl text-darkGray rounded px-10 py-10 text-center">
      <h1 className="text-3xl md:text-4xl text-center font-semibold text-zinc-100 mb-2">
        Our Impact
      </h1>
      <h3 className="text-center text-[#d5d7dd] font-medium mb-8 lg:mx-20">
      Serving 25+ clients globally with a track record of completing 55+ successful projects and generating over 10M+ in revenue.
      </h3>

      <div className="lg:flex justify-center items-center lg:gap-20 mt-5 grid gap-3 text-start">
        <div className="flex items-center gap-8 justify-center mt-5">
          <div className="flex items-center gap-2">
            <h1 className="text-white md:text-5xl text-4xl font-semibold">25<span className="text-secondary font-bold md:text-5xl">+</span></h1> 
            <div className="grid uppercase">
              <h1 className="place-self-start font-semibold">Clients</h1>
              <h1 className="place-self-start font-semibold">Worldwide</h1>
            </div>
          </div>
        </div>

        <div className=" items-center gap-8 justify-center mt-5 grid">
          <div className="flex items-center gap-2">
          <h1 className="text-white md:text-5xl text-4xl font-semibold">55<span className="text-secondary font-bold md:text-5xl">+</span></h1> 
            <div className="grid uppercase">
              <h1 className="place-self-start font-semibold">Projects</h1>
              <h1 className="place-self-start font-semibold">Completed</h1>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8 justify-center mt-5">
          <div className="flex items-center gap-2">
          <h1 className="text-white md:text-5xl text-4xl font-semibold">9M<span className="text-secondary font-bold md:text-5xl">+</span></h1> 
            <div className="grid uppercase">
              <h1 className="place-self-start font-semibold">Revenue</h1>
              <h1 className="place-self-start font-semibold">Generated</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
