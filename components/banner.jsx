import React from "react";
import Image from "next/image";

const banner = () => {
  return (
    <div className="">
      <div className="mt-36 text-center">
        <button class="mb-5 mt-5 justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-[#810def] text-white px-6 py-3 inline-flex items-center space-x-2 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
          </svg>
          <span>Drop us a Line and book a Demo</span>
        </button>
        <h1 className="text-5xl font-bold mb-3">
          Delivering Game-Changing <br /> Marketing Solutions
        </h1>
        <h3 className=" text-xl font-medium text-gray-100">
        Grow your brand faster with our cutting-edge marketing solutions.
        </h3>
        <div className="text-center flex justify-center">
          <button
            className="mt-4 text-center   rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background h-14 px-6 py-4 flex items-center gap-2 text-xl font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:Rlafnnja:"
            data-state="closed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
              <path d="M8 14h.01"></path>
              <path d="M12 14h.01"></path>
              <path d="M16 14h.01"></path>
              <path d="M8 18h.01"></path>
              <path d="M12 18h.01"></path>
              <path d="M16 18h.01"></path>
            </svg>
            Schedule a Meeting
          </button>
        </div>
      </div>

      {/* <div className="">
        <h1 className="text-6xl font-bold"></h1>
        <p className="w-[580px] mt-3 mb-7">
          We provide innovative digital marketing solutions designed to enhance
          your brand&apos;s presence and drive business growth. Partner with us
          to transform your vision into reality with tailored strategies and
          expert execution.
        </p>
        <a href="/" className="btn">
          Schedule A Meeting
        </a>
      </div> */}
    </div>
  );
};

export default banner;
