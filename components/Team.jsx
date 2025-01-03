import Person1 from "../asset/Rakibul-Islam.jpeg";
import Person2 from "../asset/Ariful-Islam.png";
import Person3 from "../asset/Shariful-Islam.png";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Team = ({ showExploreButton = true }) => {
  return (
    <div className="lg:mt-32 mt-20 text-center">
      <div>
        <div>
          <h1 className="text-3xl md:text-4xl text-center font-semibold text-zinc-100 pb-3">
            Meet the Team behind Anolipi Digital
          </h1>
          <h3 className="text-center text-[#d5d7dd] font-medium mb-8 lg:mx-20">
            Discover our dedicated individuals driving Anolipi Digital&apos;s
            success. Our talented team brings expertise, creativity, and passion
            to every project, ensuring exceptional results and client
            satisfaction.
          </h3>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="p-4 border-2 border-gray-500 hover:border-secondary">
              <div className="bg-[#D3D3D3]">
                <Image
                  className="mx-auto w-full h-full object-cover"
                  src={Person1}
                  alt="profile-picture"
                  width={300}
                  height={300}
                />
              </div>

              <div className="text-white">
                <div className="mt-5">
                  <h4 className="text-[22px] text-secondary font-semibold text-center">
                    Rakibul Islam
                  </h4>
                  <h2 className="font-bold">Founder & CEO</h2>
                </div>
                <p className="font-medium mt-3 text-[#858585]">
                  Meet Rakibul, our creative visionary CEO, brings a unique
                  blend of innovation and passion to the team.
                </p>

                <div className="flex justify-center text-xl mt-4">
                  <a
                    href="https://www.linkedin.com/in/rakibul-islam-692069258/"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover:text-blue-400"
                    aria-label="Linkedin"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://x.com/qrakibul"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover=text-blue-400"
                    aria-label="X"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.facebook.com/erakibul"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover=text-blue-400"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 border-2 border-gray-500 hover:border-secondary">
              <div className="bg-[#D3D3D3]">
                <Image
                  className="mx-auto w-full h-full object-cover"
                  src={Person2}
                  alt="profile-picture"
                  width={300}
                  height={300}
                />
              </div>

              <div className="text-white">
                <div className="mt-5">
                  <h4 className="text-[22px] text-secondary font-semibold text-center">
                    Ariful Islam
                  </h4>
                  <h2 className="font-bold">COO & Software Developer</h2>
                </div>
                <p className="font-medium mt-3 text-[#858585]">
                  Meet Ariful, our innovational software developer who turns
                  complex problems into elegant & Efficient solutions.
                </p>
                <div className="flex justify-center text-xl mt-4">
                  <a
                    href="https://github.com/hellomrariful"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover:text-blue-400"
                    aria-label="GitHub"
                  >
                    <FaGithub></FaGithub>
                  </a>
                  <a
                    href="https://www.facebook.com/hellomrariful.id"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover=text-blue-400"
                    aria-label="GitHub"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hellomrariful/"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover=text-blue-400"
                    aria-label="Linkedin"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 border-2 border-gray-500 hover:border-secondary">
              <div>
                <Image
                  className="mx-auto w-full h-full object-cover"
                  src={Person3}
                  alt="profile-picture"
                  width={300}
                  height={300}
                />
              </div>

              <div className="text-white">
                <div className="mt-5">
                  <h4 className="text-[22px] text-secondary font-semibold text-center">
                    Sariful Islam
                  </h4>
                  <h2 className="font-bold">CFO & Media Buyer</h2>
                </div>
                <p className="font-medium mt-3 text-[#858585]">
                Meet Shariful, our expert Media Buyer, who plays a vital role in elevating our brand&rsquo;s reach and success.
                </p>
                <div className="flex justify-center text-xl mt-4">
                  {/* <a
                    href="https://github.com/hellomrariful"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover=text-blue-400"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a> */}
                  <a
                    href="https://www.facebook.com/shariful.islam.me"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover=text-blue-400"
                    aria-label="GitHub"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://discord.com/channels/@me/1249711411811057714"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover=text-blue-400"
                    aria-label="Discoard"
                  >
                    <FaDiscord />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showExploreButton && (
        <Link href="/about-us">
          <Button className="px-4 text-center flex justify-end mx-auto mt-16">
            Explore Full Team
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Team;