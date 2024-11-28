import React from "react";
import Image from "next/image";
import meta from "../asset/meta.webp";
import google from "../asset/google.webp";
import payoneer from "../asset/payoneer.webp";
import taboola from "../asset/taboola.webp";
import tiktok from "../asset/tiktok.webp";
import outbrain from "../asset/outbrain.webp";
import revcontent from "../asset/revcontent.webp";
const Media = () => {
  return (
    <div className="mt-28">
      <div>
        <h1 className="text-3xl md:text-4xl text-center font-semibold text-zinc-100 pb-3">
          {/* Strategic Media Partners */}
          Our Advertising Partners
        </h1>
        <p className="text-center text-[#d5d7dd] font-medium lg:mx-20">
          With a strong network of industry-leading advertising partners, we
          deliver impactful and results-driven media buying solutions.
        </p>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 mt-4 gap-10  justify-center mx-auto">
  <div>
    <Image className="w-44 h-24 object-contain" src={meta} alt="Meta" />
  </div>
  {/* <div>
    <Image className="w-44 h-24 object-contain" src={google} alt="Google" />
  </div> */}
  <div>
    <Image className="w-40 h-24 object-contain" src={taboola} alt="Taboola" />
  </div>
  <div>
    <Image className="w-44 h-24 object-contain" src={revcontent} alt="Revcontent" />
  </div>
  <div>
    <Image className="w-44 h-24 object-contain" src={outbrain} alt="Outbrain" />
  </div>
  <div>
    <Image className="w-44 h-24 object-contain" src={tiktok} alt="TikTok" />
  </div>
  {/* <div>
    <Image className="w-44 h-24 object-contain" src={payoneer} alt="Payoneer" />
  </div> */}
  
</div>

      </div>
    </div>
  );
};

export default Media;
