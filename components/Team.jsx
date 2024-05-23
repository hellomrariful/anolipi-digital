import Trainer1 from "../asset/T-01-71d2781a.png";
import Trainer2 from "../asset/T-01-71d2781a.png";
import Trainer3 from "../asset/T-01-71d2781a.png";
import { FaInstagram, FaFacebook, FaTwitter, FaStar } from "react-icons/fa";
import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <div className="mt-20 text-center">
        <div>
            <h1 className="text-3xl md:text-4xl text-center font-semibold text-zinc-100 pb-3">Meet the Team behind Anolipi Digital</h1>
            <h3 className="text-center text-[#d5d7dd] font-medium mb-8">Discover essential tools for successful trading. From market insights to user-friendly platforms, we offer everything you need to trade with confidence.</h3>
        </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        data-aos-offset="100"
      >
        <div className="grid md:grid-cols-3 space-x-4 ">
        
          <div className="bg-[#1B2129]">
            <div className="bg-[#D3D3D3]">
              <Image className="mx-auto" src={Trainer1} alt="profile-picture" />
            </div>

            <div className="p-6 text-white">
              <div className="flex justify-between items-center">
                <h4 className="mb-2 text-2xl font-semibold">Madison Froning</h4>
                <span className="flex items-center text-xl  text-[#FFA722]">
                  <FaStar></FaStar>
                  <span className="text-white">/5</span>
                </span>
              </div>
              <p className="border-[#49505A] border"></p>
              <p className="mt-4 mb-1 text-xl font-semibold">
                Specializations :
              </p>
              <p className=" text-xl font-normal text-[#858585]">
                Fitness Fashion Export, Fiesta & Rehab
              </p>
              <div className="flex justify-center text-xl gap-4 mt-4">
                <FaInstagram></FaInstagram>
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
              </div>
            </div>
          </div>
          <div className="bg-[#1B2129]">
            <div className=" bg-[#D3D3D3]">
              <Image className="mx-auto" src={Trainer3} alt="profile-picture" />
            </div>

            <div className="p-6 text-white">
              <div className="flex justify-between items-center">
                <h4 className="mb-2 text-2xl font-semibold">Jhon Willson</h4>
                <span className="flex items-center text-xl  text-[#FFA722]">
                  <FaStar></FaStar>
                  <span className="text-white">/5</span>
                </span>
              </div>
              <p className="border-[#49505A] border"></p>
              <p className="mt-4 mb-1 text-xl font-semibold">
                Specializations :
              </p>
              <p className=" text-xl font-normal text-[#858585]">
                Meditation Export, Mental & Yoga
              </p>
              <div className="flex justify-center text-xl gap-4 mt-4">
                <FaInstagram></FaInstagram>
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
              </div>
            </div>
          </div>
          <div className="bg-[#1B2129]">
            <div className=" bg-[#D3D3D3]">
              <Image className="mx-auto" src={Trainer3} alt="profile-picture" />
            </div>

            <div className="p-6 text-white">
              <div className="flex justify-between items-center">
                <h4 className="mb-2 text-2xl font-semibold">Jhon Willson</h4>
                <span className="flex items-center text-xl  text-[#FFA722]">
                  <FaStar></FaStar>
                  <span className="text-white">/5</span>
                </span>
              </div>
              <p className="border-[#49505A] border"></p>
              <p className="mt-4 mb-1 text-xl font-semibold">
                Specializations :
              </p>
              <p className=" text-xl font-normal text-[#858585]">
                Meditation Export, Mental & Yoga
              </p>
              <div className="flex justify-center text-xl gap-4 mt-4">
                <FaInstagram></FaInstagram>
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
