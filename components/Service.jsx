import React from "react";
import Image from "next/image";
import Icon1 from "../asset/s-1.png";
import Icon2 from "../asset/8026439.png";
import Icon3 from "../asset/4860983.png";
import Icon4 from "../asset/s-4.png";
import Icon5 from "../asset/s-5.png";
import Icon6 from "../asset/research-removebg-preview.png";

const Service = () => {
  return (
    <div id="service" className="lg:mt-32 mt-20">
      <div>
        <h1 className="text-3xl md:text-4xl text-center font-semibold text-zinc-100 pb-3">
        Services We Provide
        </h1>
        <h3 className="text-center text-[#d5d7dd] font-medium mb-8 lg:mx-20">
        Maximize your business growth with our expert digital services. From strategic insights to seamless implementation, we provide everything you need for online success.
        </h3>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-12 text-darkGray">
        {/* cart 1  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-tertiary to-primary  border border-b-primary border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon1}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Web Design & Development</h3>
          </div>
          <p className="text-sm font-medium mt-3 text-darkGray">
          Creating visually appealing and functional websites tailored to your brand&apos;s needs.
          </p>
        </div>

        {/* cart 2  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-tertiary to-primary  border border-b-primary border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon2}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Social Media Advertising</h3>
          </div>
          <p className="text-sm font-medium mt-3 text-darkGray">
          Effectively promoting your brand and engaging with your audience through targeted social media campaigns.
          </p>
        </div>

        {/* cart 3  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-tertiary to-primary  border border-b-primary border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon3}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Building Your Brand Online</h3>
          </div>
          <p className="text-sm font-medium mt-3 text-darkGray">
          Transforming your brand from concept to a full-fledged digital presence.
          </p>
        </div>

        {/* cart 4  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-tertiary to-primary  border border-b-primary border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon4}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Seamless E-commerce Solutions</h3>
          </div>
          <p className="text-sm font-medium mt-3 text-darkGray">
          Providing end-to-end dropshipping services to streamline your online store operations.
          </p>
        </div>

        {/* cart 5  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-tertiary to-primary  border border-b-primary border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon5}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Driving Targeted Visitors</h3>
          </div>
          <p className="text-sm font-medium mt-3 text-darkGray">
          Implementing strategies to drive targeted traffic to your website, increasing sales and engagement.
          </p>
        </div>

        {/* cart 6  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-tertiary to-primary  border border-b-primary border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon6}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Maximizing Search Rankings</h3>
          </div>
          <p className="text-sm font-medium mt-3 text-darkGray">
          Improving your online visibility and search rankings through expert SEO strategies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
