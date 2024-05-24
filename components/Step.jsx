import Image from "next/image";
import React from "react";

const Step = () => {
  return (
    <div>
      {/* cart 1  */}
      <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-darkOne to-darkTwo  border border-b-transparent border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
        <div className="w-full flex items-center justify-start gap-3">
          <Image
            src={Icon1}
            alt="Trad Icon"
            width={40}
            height={40}
            placeholder="blur"
          />
          <h3 className="font-semibold">Real Time Market Updates</h3>
        </div>
        <p className="text-sm font-medium mt-3 text-darkGray">
          Get instant updates on market prices, news, and events to make
          informed decisions.
        </p>
      </div>
    </div>
  );
};

export default Step;
