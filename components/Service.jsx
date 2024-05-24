import React from "react";
import Image from "next/image";
import Icon1 from "../asset/stock.webp";

const Service = () => {
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-3xl md:text-4xl text-center font-semibold text-zinc-100 pb-3">
          Meet the Team behind Anolipi Digital
        </h1>
        <h3 className="text-center text-[#d5d7dd] font-medium mb-8">
          Discover essential tools for successful trading. From market insights
          to user-friendly platforms, we offer everything you need to trade with
          confidence.
        </h3>
      </div>
      <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 mt-10 text-darkGray">
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
    </div>
  );
};

export default Service;
