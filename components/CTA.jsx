import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <div className="my-20 bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree hover:bg-gradient-to-tl text-darkGray rounded px-10 py-10 text-center">
      <h1 className="2xl:text-3xl md:text-2xl text-xl font-semibold pb-4 ">
        Ready to Boost Your Brand?
      </h1>
      <h3>
        Let&apos;s take your business to new heights in the digital landscape.
        Contact us today to get started on your journey to success!
      </h3>
      <div className="flex items-center gap-8 text-center justify-center mt-5">
        <Button className="text-center">Contact Us</Button>
        {/* <Button>Get A Free Consultation</Button> */}
      </div>
    </div>
  );
};

export default CTA;
