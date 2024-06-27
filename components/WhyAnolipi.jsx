import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Image from "next/image";
import Trainer1 from "../asset/macbook-apple-imac-computer-39284.jpeg";

const WhyAnolipi = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 mt-32  items-center">
      <div className="lg:w-1/2 w-full">
        <h1 className="text-3xl md:text-4xl font-semibold text-white pb-3">
          Why Anolipi Digital ?
        </h1>
        <h3 className="text-[#d5d7dd] font-medium mb-8">
          Aolipi Digital offer commitment to innovation and quality. We are
          on-stop solution for you, Because we offering unparalleled expertise
          in web design, development, and digital marketing.
        </h3>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-secondary">
              <IoCheckmarkCircleSharp />
            </span>
            <span className="text-xl font-semibold">
              Comprehensive Digital Solutions
            </span>
          </div>
          <h3 className="ml-8 font-medium text-darkGray">
            Unmatched expertise in comprehensive digital solutions.
          </h3>
        </div>
        <div className="my-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-secondary">
              <IoCheckmarkCircleSharp />
            </span>
            <span className="text-xl font-semibold">Personalized Approach</span>
          </div>
          <h3 className="ml-8 font-medium text-darkGray">
            Customized strategies to meet your unique needs.
          </h3>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-secondary">
              <IoCheckmarkCircleSharp />
            </span>
            <span className="text-xl font-semibold">Our 24/7 Dedicated Support</span>
          </div>
          <h3 className="ml-8 font-medium text-darkGray">
          Ongoing live support to stay ahead.
          </h3>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:flex lg:justify-center lg:items-center md:order-first">
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

export default WhyAnolipi;
