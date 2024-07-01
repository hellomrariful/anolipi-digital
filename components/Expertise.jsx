import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Image from "next/image";
import Trainer1 from "../asset/macbook-apple-imac-computer-39284.jpeg";

const Expertise = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-3 lg:mt-32 mt-20 items-center">
      <div className="lg:w-1/2 w-full">
        <h1 className="md:text-3xl lg:text-4xl text-2xl font-semibold text-white pb-3">
          Our Areas of Expertise
        </h1>
        <h3 className="text-[#d5d7dd] font-medium mb-8">
          Discover essential tools for successful digital marketing. From web
          design to SEO, we offer everything you need to enhance your online
          presence.
        </h3>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-secondary">
              <IoCheckmarkCircleSharp />
            </span>
            <span className="text-xl font-semibold">
            Digital Branding Mastery
            </span>
          </div>
          <h3 className="ml-8 font-medium text-darkGray">
            Creating visually stunning and functional websites
          </h3>
        </div>
        <div className="my-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-secondary">
              <IoCheckmarkCircleSharp />
            </span>
            <span className="text-xl font-semibold">Search Engin Optimization</span>
          </div>
          <h3 className="ml-8 font-medium text-darkGray">
            Enhancing your online visibility and search rankings
          </h3>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-secondary">
              <IoCheckmarkCircleSharp />
            </span>
            <span className="text-xl font-semibold">Business Consulting</span>
          </div>
          <h3 className="ml-8 font-medium text-darkGray">
            Guiding you through strategic decisions for growth
          </h3>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:flex lg:justify-center lg:items-center">
        <div
          className="relative rounded-2xl overflow-hidden shadow-lg mt-8 md:mt-0"
          style={{ aspectRatio: "2/2", width: "100%", height: "auto" }}
        >
          <Image
            className="rounded-2xl"
            src="https://i.ibb.co/zXNPM3c/6369e29270681a668ff733a0-tab-change-image-1.jpg"
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
