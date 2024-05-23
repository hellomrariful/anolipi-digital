"use client";
import { useState } from "react";
import Link from "next/link";
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
      <div className="flex items-center justify-between mx-auto mt-8 mb-10">
        <Link href="/" className="flex items-center flex-shrink-0">
          <span className="self-center md:text-[32px] text-xl font-bold whitespace-nowrap">
            Anolipi Digital
          </span>
        </Link>

        <div className="flex-1  justify-center hidden md:flex">{NavLinks}</div>

        <div className="flex items-center md:ml-auto">
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

          <Link href="/">
            <Button className="hidden md:flex px-4">Get Quote</Button>
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden w-full mt-4 border rounded-lg backdrop-blur-md"
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
          <Button className="px-4 text-center flex justify-end mx-auto mb-4">
            Get Quote
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;