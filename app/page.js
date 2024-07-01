"use client"
import { useState, useEffect, useRef } from 'react';
import Team from '@/components/Team';
import Service from '@/components/Service';
import CTA from '@/components/CTA';
import Feedback from '@/components/Feedback';
import Map from '@/components/Map/Map';
import Impact from '@/components/Impact';
import WhyAnolipi from '@/components/WhyAnolipi';
import Expertise from '@/components/Expertise';
import Step from '@/components/Step';
import Button from "../components/Button";
import Image from "next/image";
import { PopupModal } from "react-calendly";



export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div ref={containerRef}>
      <div>
        <div className="mx-auto container">
          {/* banner section */}
          <div>
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
            <Image
              src="https://i.postimg.cc/WpQyskj6/triangle-left.png"
              className="triangle3"
              alt="Triangle Left"
              width={300}
              height={300}
            />
            {/* Banner Text */}
            <div className="lg:mt-36 mt-16 text-center">
            <a href="mailto:digital@anolipi.com">
              <button
                className="mb-5 justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-white hover:text-black h-10 bg-[#810def] text-white px-6 py-3 inline-flex items-center space-x-2 rounded"
              >
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
                  className=""
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                <span>Drop us a Line and book a Demo</span>
              </button>
              </a>
              <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3">
                Delivering <span className="text-secondary">Game-Changing</span> <br /> Marketing Solutions
              </h1>
              <h3 className="md:text-xl text-[18px] font-medium text-gray-100">
                Grow your brand faster with our cutting-edge marketing solutions.
              </h3>
              <div className="text-center flex justify-center">
                <Button
                  className="mt-5"
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
                  onClick={handleOpen}
                >
                  Schedule a Meeting
                </Button>
              </div>
            </div>
          </div>

          <Step />
          <Service />
          <Expertise />
          <WhyAnolipi />
          <Impact />
          <Team showExploreButton={true} />
          <Feedback />
          <CTA />
          <Map />
        </div>
      </div>

      {containerRef.current && (
        <PopupModal
          url="https://calendly.com/hello-mrariful/free-digital-marketing-consultation"
          onModalClose={handleClose}
          open={isOpen}
          rootElement={containerRef.current}
        />
      )}
    </div>
  );
}