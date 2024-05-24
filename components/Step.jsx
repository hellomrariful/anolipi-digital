import Image from "next/image";
import React from "react";
import Icon1 from "../asset/icon-01.svg";
import Icon2 from "../asset/icon-02.svg";
import Icon3 from "../asset/icon-03.svg";

const Step = () => {
  return (
    <div className="mt-40">
      <div className=" grid grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="flex flex-col items-center p-6  border border-white rounded-xl text-center transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg">
          <Image
            src={Icon2}
            alt="Trad Icon"
            width={50}
            height={50}
            className="bg-[#810def] p-3 rounded-sm"
          />

          <h3 className="text-white font-medium mb-1 text-xl mt-2">
            Increased Growth
          </h3>
          <p className="text-sm font-medium text-darkGray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        {/* Repeat similar card for other content */}
        {/* Card 2 */}
        <div className="flex flex-col items-center p-6  border border-white rounded-xl text-center transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg">
          <Image
            src={Icon1}
            alt="Another Icon"
            width={50}
            height={50}
            className="bg-[#810def] p-3 rounded-sm"
          />
          <h3 className="text-white font-medium mb-1 text-xl mt-2">
            Increased Growth
          </h3>
          <p className="text-sm font-medium text-darkGray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center p-6 border border-white rounded-xl text-center transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg">
          <Image
            src={Icon3}
            alt="Yet Another Icon"
            width={50}
            height={50}
            className="bg-[#810def] p-3 rounded-sm"
          />
          <h3 className="text-white font-medium mb-1 text-xl mt-2">
            Increased Growth
          </h3>
          <p className="text-sm font-medium text-darkGray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step;
