import React from 'react';
import Team from '@/components/Team';
import Image from 'next/image';
import google from "../../asset/google-ads.png";
import facebook from "../../asset/Screenshot-removebg-preview.png";
import googlePertner from "../../asset/google.png";
import Person1 from "../../asset/Najmul1.png";
import Person2 from "../../asset/Nayan.png";
import Person3 from "../../asset/avatar3.png";
import Media from '@/components/Media';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaStar,
  FaGithub,
  FaLinkedin,
  FaDribbble,
  FaDiscord
} from "react-icons/fa";

export const metadata = {
  title: "About Us | Anolipi",
  description: "Learn about Anolipi Digital, our mission, and the passionate team behind our innovative digital marketing solutions.",
};

const AboutUsPage = () => {
  return (
    <div className='mb-10 -mt-20 mt-38'>
      {/* <Team showExploreButton={false} /> */}

     {/* <div className="mt-10 text-center">
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
                  Najmul Hasan
                  </h4>
                  <h2 className="font-bold">CPO & UI/UX Designer</h2>
                </div>
                <p className="font-medium mt-3 text-[#858585]">
                  Meet Najmul, our dedicated UI/UX Designer, is the driving force behind our brand&apos;s visual appeal and success.
                </p>

                <div className="flex justify-center text-xl mt-4">
                  <a
                    href="https://www.linkedin.com/in/gdnajmul/"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover:text-blue-400"
                    aria-label="Linkedin"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://dribbble.com/gdnajmul"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover=text-blue-400"
                    aria-label="X"
                  >
                    <FaDribbble/>
                  </a>
                  <a
                    href="https://www.facebook.com/gdnajmul"
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
                  Afran Nayan
                  </h4>
                  <h2 className="font-bold">Media Buying & Marketing Expert</h2>
                </div>
                <p className="font-medium mt-3 text-[#858585]">
                Meet Afran, our Media Buying & Marketing Expert, crafting impactful strategies to amplify brand growth and success.
                </p>
                <div className="flex justify-center text-xl mt-4">
                  <a
                    href="https://discord.com/channels/@me/1250169048889819398"
                    className="mx-2 text-[22px] transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover:text-blue-400"
                    aria-label="Discord"
                  >
                   <FaDiscord />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100069718076051"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover=text-blue-400"
                    aria-label="GitHub"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/md-nayan-miah-34a438263/"
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
                    Forhad Alom
                  </h4>
                  <h2 className="font-bold">Media Buying & SEO Specialist</h2>
                </div>
                <p className="font-medium mt-3 text-[#858585]">
                Meet Forhad, our Media Buying & SEO Specialist, dedicated to enhancing visibility and driving impactful results in the digital space.
                </p>
                <div className="flex justify-center text-xl mt-4">
                  <a
                    href="https://discord.com/channels/@me/1258313462820376587"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover=text-blue-400"
                    aria-label="GitHub"
                  >
                    <FaDiscord />
                  </a>
                  <a
                    href="https://www.facebook.com/mdforhad.reza.9655806"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover=text-blue-400"
                    aria-label="GitHub"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/itssforhad"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover=text-blue-400"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div> */}

      <Media />

      {/* <div className="mt-20">
      <div>
        <h1 className="text-3xl md:text-4xl text-center font-semibold text-zinc-100 pb-3">
        Top Brands that worked with Us
        </h1>
        <h3 className="text-center text-[#d5d7dd] font-medium mb-8 md:mx-20">
        Explore the esteemed brands that have partnered with us, showcasing our trusted reputation and proven success in delivering exceptional results.
        </h3>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-10 items-center mb-20 place-items-center">
  <div>
    <Image className="h-fit bg-secondary rounded py-[10px] px-4 w-52 text-white" src={google} alt="" />
  </div>
  <div>
    <Image className="h-fit bg-secondary rounded px-4 py-[10px] w-52 text-white" src={facebook} alt="" />
  </div>
  <div>
    <Image className="bg-secondary rounded w-56 h-20 -py-20 px-8 text-white" src={googlePertner} alt="" />
  </div>
</div>

      </div>  */}
    </div>
  );
};

export default AboutUsPage;
