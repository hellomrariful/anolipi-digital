import React from "react";
import Link from "next/link";
import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div className="mt-48 flex flex-col justify-center items-center">
      <div className="2xl:text-[150px] md:text-[100px] text-[90px] text-center font-bold relative -mt-10 text-white">
        404
      </div>
      <h1 className="2xl:text-3xl md:text-2xl text-lg  mb-8  text-center text-white font-semibold">
      Sorry, an unexpected error has occurred.
      </h1>
      <Link href="/">
        <Button>
        BACK TO HOMEPAGE
        </Button>
      </Link>
    </div>
  );
};

export default NotFound; 