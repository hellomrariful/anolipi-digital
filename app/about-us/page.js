import React from 'react';
import Team from '@/components/Team';
import Image from 'next/image';
import google from "../../asset/google-ads.png";
import facebook from "../../asset/Screenshot-removebg-preview.png";
import googlePertner from "../../asset/google.png";

export const metadata = {
  title: "About Us | Anolipi",
  description: "About Us Anolipi",
};

const AboutUsPage = () => {
  return (
    <div className='mb-10 -mt-20'>
      <Team showExploreButton={false} />

      <div className="mt-20">
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

      </div>
    </div>
  );
};

export default AboutUsPage;
