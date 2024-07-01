import React from "react";
import Button from "./Button";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="lg:mt-32 mt-20 border-2 border-gray-500 p-6 hover:border-secondary text-darkGray rounded px-10 py-10 text-center">
      <h1 className="2xl:text-3xl md:text-2xl text-xl text-center font-semibold text-zinc-100 mb-2">
        Ready to Boost Your Brand?
      </h1>
      <h3 className="text-center text-[#d5d7dd] font-medium mb-8 md:mx-20">
        Let&apos;s take your business to new heights in the digital landscape.
        Contact us today to get started on your journey to success!
      </h3>
      <div className="flex items-center gap-8 text-center justify-center mt-5">
        <Link href='/contact'>
        <Button className="text-center text-white">Contact Us</Button>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
