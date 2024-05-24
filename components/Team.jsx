import Trainer1 from "../asset/T-01-71d2781a.png";
import Trainer2 from "../asset/T-01-71d2781a.png";
import Trainer3 from "../asset/T-01-71d2781a.png";
import { FaInstagram, FaFacebook, FaTwitter, FaStar } from "react-icons/fa";
import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <div className="mt-32 text-center">
        <div>
            <h1 className="text-3xl md:text-4xl text-center font-semibold text-zinc-100 pb-3">Meet the Team behind Anolipi Digital</h1>
            <h3 className="text-center text-[#d5d7dd] font-medium mb-8 lg:mx-20">Discover our dedicated individuals driving Anolipi Digital&apos;s success. Our talented team brings expertise, creativity, and passion to every project, ensuring exceptional results and client satisfaction.</h3>
        </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        data-aos-offset="100"
      >
        <div className="grid lg:grid-cols-3 lg:space-x-4 gap-4">
        
        <div className="p-4 border-2 border-gray-500 hover:border-secondary">
            <div className=" bg-[#D3D3D3]">
              <Image className="mx-auto" src={Trainer3} alt="profile-picture" />
            </div>

            <div className="text-white">
              <div className="mt-5">
                <h4 className="text-[22px] text-secondary font-semibold text-center">Rakibul Islam</h4>
                <h2 className="font-bold">Founder & CEO</h2>
              </div>
              <p className=" font-medium mt-3 text-[#858585]">
              Meet Rakibul, our creative visionary SEO, brings a unique blend of innovation and passion to the team.
              </p>
              <div className="flex justify-center text-xl gap-4 mt-4 mb-2">
                <FaInstagram></FaInstagram>
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
              </div>
            </div>
          </div>
          <div className="p-4 border-2 border-gray-500 hover:border-secondary">
            <div className=" bg-[#D3D3D3]">
              <Image className="mx-auto" src={Trainer3} alt="profile-picture" />
            </div>

            <div className="text-white">
              <div className="mt-5">
                <h4 className="text-[22px] text-secondary font-semibold text-center">Ariful Islam</h4>
                <h2 className="font-bold">Software Engineer</h2>
              </div>
              <p className=" font-medium mt-3 text-[#858585]">
              Meet Ariful, our innovational software engineer who turns complex problems into elegant & Efficient solutions.
              </p>
              <div className="flex justify-center text-xl gap-4 mt-4">
                <FaInstagram></FaInstagram>
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
              </div>
            </div>
          </div>

          <div className="p-4 border-2 border-gray-500 hover:border-secondary">
            <div className=" bg-[#D3D3D3]">
              <Image className="mx-auto" src={Trainer3} alt="profile-picture" />
            </div>

            <div className="text-white">
              <div className="mt-5">
                <h4 className="text-[22px] text-secondary font-semibold text-center">Jordan Willson</h4>
                <h2 className="font-bold">Marketing Lead</h2>
              </div>
              <p className=" font-medium mt-3 text-[#858585]">
              Meet Najmul, our dedicated UI/UX Designer,  is the driving force behind our brand&rsquo;s and success.
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
