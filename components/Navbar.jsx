"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLinks = (
    <nav className="flex gap-3 md:gap-4 lg:gap-10 lg:text-xl text-[18px]">
      <Link href="/">Home</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/register">Register</Link>
    </nav>
  );

  return (
    <nav className="">
      <div className="flex flex-wrap items-center justify-between mx-auto mt-8 mb-10">
        <Link href="/" className="flex items-center">
          {/* <Image
            src="https://i.postimg.cc/XJqRdSJb/Onulipi-Icon-Black.png"
            className="h-12 mr-3"
            alt="Logo"
            width={50}
            height={50}
          /> */}
          <span className="self-center md:text-3xl text-2xl font-bold whitespace-nowrap">
            Anolipi Digital
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          <Link href="/">
            <Button>
            Get Quote
            </Button>
          </Link>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover-bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-user"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-10 h-10 text-black ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div
            className="items-center justify-between md:hidden w-full mt-4 border rounded-lg backdrop-blur-md"
            id="navbar-mobile-menu"
          >
            <ul className="flex flex-col p-4 space-y-4 text-center">
              <li className="block text-gray-900 hover:text-blue-700">
                <Link href="/">Home</Link>
              </li>
              <li className="block text-gray-900 hover:text-blue-700">
                <Link href="/gallery">Gallery</Link>
              </li>
              <li className="block text-gray-900 hover:text-blue-700">
                <Link href="/profile">Profile</Link>
              </li>
              <li className="block text-gray-900 hover:text-blue-700">
                <Link href="/register">Register</Link>
              </li>
            </ul>
          </div>
        )}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {NavLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
