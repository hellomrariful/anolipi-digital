import React from "react";
import Image from "next/image";
import Button from "./Button";

const banner = () => {
  return (
    <div className="">
      {/* background */}
      <Image
        src="https://i.postimg.cc/4x12v2cB/triangle-top.png"
        className="triangle1"
        alt="Triangle Top"
        width={300}
        height={300}
      />
      <Image
        src="https://i.postimg.cc/WpQyskj6/triangle-left.png"
        className="triangle2"
        alt="Triangle Left"
        width={300}
        height={300}
      />
        {/* <Image
        src="https://i.postimg.cc/MZc4kDkp/circle.png"
        className="circle1"
        alt="Circle"
        width={300}
        height={300}
      /> */}

<Image
        src="https://i.postimg.cc/WpQyskj6/triangle-left.png"
        className="triangle3"
        alt="Triangle Left"
        width={300}
        height={300}
      />

      <Image
        src="https://i.postimg.cc/MZc4kDkp/circle.png"
        className="circle"
        alt="Circle"
        width={300}
        height={300}
      />
      
      {/* Banner Text */}
      <div className="mt-36 text-center">
        <button class="mb-5 justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-[#810def] text-white px-6 py-3 inline-flex items-center space-x-2 rounded">
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
        <h3 className="text-xl font-medium text-gray-100">
          Grow your brand faster with our cutting-edge marketing solutions.
        </h3>
        <div className="text-center flex justify-center">
        <Button className="mt-5"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
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
      }
    >
      Schedule a Meeting
    </Button>
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
