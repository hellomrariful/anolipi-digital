"use client"
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { PopupModal } from "react-calendly";

const Footer = () => {

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="text-white " ref={containerRef}>
      <div className="">
        <footer>
          <div className="container py-10 mx-auto">
            <div className="flex flex-col items-center text-center">
              <Link href="/" className="flex items-center">
                {/* <img src={logo} className="h-12 mr-3" alt="" /> */}
                <span className="text-3xl font-bold">Anolipi Digital LLC</span>
              </Link>

              <div className="flex flex-wrap justify-center mt-6  text-darkGray">
                <Link
                  href="/about-us"
                  className="mx-4 transition-colors duration-300 hover:text-[#524FF5]"
                >
                  About
                </Link>
                <Link
                  href="/service"
                  className="mx-4 transition-colors duration-300 hover:text-[#524FF5]"
                >
                  Service
                </Link>
                <a
                  href=""
                  className="mx-4 transition-colors duration-300 hover:text-[#524FF5]"
                >
                  Terms & Condition
                </a>

                <a
                  href=""
                  className="mx-4 transition-colors duration-300 hover:text-[#524FF5]"
                >
                  Privacy Policy
                </a>
                <a
                  href=""
                  className="mx-4  transition-colors duration-300 hover:text-[#524FF5]"
                >
                  Refund Policy
                </a>
                <button onClick={handleOpen}
                  className="mx-4 transition-colors duration-300 hover:text-[#524FF5]"
                >
                  Book a Demo
                </button>
              </div>
            </div>

            {/* <div className="grid justify-center item-center mx-auto mt-2 text-darkGray">
              <h3 className="mx-auto">Mail: digital@anolipi.com</h3>
              <h3 className="mx-auto">Contact: +1 (505) 509-0709</h3>
              <h3 className="mx-auto">
                Location: 123 Street, Albuquerque, USA
              </h3>
            </div> */}

            <div className="px-6 -mb-2">
              <hr className="border-text-darkGray mb-3 mt-8" />

              <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                <p className=" text-[#858585] dark:text-gray-300">
                  © Anolipi Digital LLC 2024. All Rights Reserved.
                </p>

                <div className="flex -mx-2 md:mt-0 mt-3 justify-center item-center ">
                  <a
                    href="mailto:digital@anolipi.com"
                    className="mx-2 text-[27px] -mt-1 transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover:text-blue-400"
                    aria-label="GitHub"
                  >
                    <IoIosMail />
                  </a>
                  <a
                    href="https://www.facebook.com/Anolipi.digital"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover:text-blue-400"
                    aria-label="GitHub"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://linkedin.com/company/anolipi/"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover:text-blue-400"
                    aria-label="Linkedin"
                  >
                    <FaLinkedin />
                  </a>
                </div>
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
          
        </footer>
      </div>
    </div>
  );
};

export default Footer;
