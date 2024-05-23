import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#181e2c]">
      <div className="2xl:text-[150px] md:text-[100px] text-[90px] text-center font-bold relative -mt-10 text-white font-montserrat">
        404
      </div>
      <h1 className="2xl:text-3xl md:text-2xl text-lg  mb-8  text-center text-white font-semibold">
      Sorry, an unexpected error has occurred.
      </h1>
      <Link href="/">
        <button className="text-center">BACK TO HOMEPAGE</button>
      </Link>
    </div>
  );
};

export default NotFound; 