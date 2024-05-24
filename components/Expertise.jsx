import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Image from "next/image";
import Trainer1 from "../asset/macbook-apple-imac-computer-39284.jpeg";

const Expertise = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 mt-10  items-center">
      <div className="lg:w-1/2 w-full">
        <h1 className="text-3xl md:text-4xl font-semibold text-zinc-900 pb-3">
          Meet the Team behind Anolipi Digital
        </h1>
        <h3 className="text-[#3d405b] font-medium mb-8">
          Discover essential tools for successful digital marketing. From web
          design to SEO, we offer everything you need to enhance your online
          presence.
        </h3>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold">
              <IoCheckmarkCircleSharp />
            </span>
            <span className="text-xl font-semibold">
              Web Design & Development
            </span>
          </div>
          <h3 className="ml-7 text-zinc-700 font-medium">
            Creating visually stunning and functional websites
          </h3>
        </div>
        <div className="my-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold">
              <IoCheckmarkCircleSharp />
            </span>
            <span className="text-xl font-semibold">SEO Expertise</span>
          </div>
          <h3 className="ml-7 text-zinc-700 font-medium">
            Enhancing your online visibility and search rankings
          </h3>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold">
              <IoCheckmarkCircleSharp />
            </span>
            <span className="text-xl font-semibold">Business Consulting</span>
          </div>
          <h3 className="ml-7 text-zinc-700 font-medium">
            Guiding you through strategic decisions for growth
          </h3>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:flex lg:justify-center lg:items-center order-first">
        <div
          className="relative rounded-2xl overflow-hidden shadow-lg"
          style={{ aspectRatio: "2/2", width: "100%", height: "auto" }}
        >
          <Image
            className="rounded-2xl"
            src={Trainer1}
            alt="profile-picture"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
