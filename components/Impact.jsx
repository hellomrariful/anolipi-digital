import React from "react";

const Impact = () => {
  return (
    <div className="my-20 bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree hover:bg-gradient-to-tl text-darkGray rounded px-10 py-10 text-center">
      <h1 className="2xl:text-3xl md:text-2xl text-xl font-semibold pb-4 ">
        Our Impact
      </h1>
      <h3>
        Let&apos;s take your business to new heights in the digital landscape.
        Contact us today to get started on your journey to success!
      </h3>

      <div className="flex justify-center items-center gap-20 mt-5">

        <div className="flex items-center gap-8 justify-center mt-5">
          <div className="flex items-center gap-2">
            <h1>325+</h1>
            <div className="grid uppercase">
              <h1 className="place-self-start">Clients</h1>
              <h1 className="place-self-start">Worldwide</h1>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8 justify-center mt-5">
          <div className="flex items-center gap-2">
            <h1>325+</h1>
            <div className="grid uppercase">
              <h1 className="place-self-start">Projects</h1>
              <h1 className="place-self-start">Completed</h1>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8 justify-center mt-5">
          <div className="flex items-center gap-2">
            <h1>325+</h1>
            <div className="grid uppercase">
              <h1 className="place-self-start">Revenue
</h1>
              <h1 className="place-self-start">Generated</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Impact;
