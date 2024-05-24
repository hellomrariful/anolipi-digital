
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="">
        <footer className="bg-[#353c7b]">
          <div className="container py-10 mx-auto">
            <div className="flex flex-col items-center text-center">
              <Link href="/"  className="flex items-center">
                {/* <img src={logo} className="h-12 mr-3" alt="" /> */}
                <span className="text-3xl font-bold">
                  Anolipi Digital LLC
                </span>
              </Link>

              <div className="flex flex-wrap justify-center mt-6  text-darkGray">
                <a
                  href=""
                  className="mx-4  transition-colors duration-300 hover:text-[#524FF5]"
                >
                  Home
                </a>
                <a
                  href=""
                  className="mx-4 transition-colors duration-300 hover:text-[#524FF5]"
                >
              Service
                </a>
                <a
                  href=""
                  className="mx-4 transition-colors duration-300 hover:text-[#524FF5]"
                >
                  About
                </a>
                <a
                  href=""
                  className="mx-4 transition-colors duration-300 hover:text-[#524FF5]"
                >
                  Terms & Condition
                </a>
                <a
                  href=""
                  className="mx-4 transition-colors duration-300 hover:text-[#524FF5]"
                >
                  Privacy Policy
                </a>
                <a
                  href=""
                  className="mx-4 transition-colors duration-300 hover:text-[#524FF5]"
                >
                  Book Demo
                </a>
                
              </div>
            </div>

            <div className="px-6 -mb-2">
              <hr className="border-text-darkGray mb-3 mt-8" />

              <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                <p className=" text-[#858585] dark:text-gray-300">
                  © Anolipi Digital LLC 2023. All Rights Reserved.
                </p>

                <div className="flex  -mx-2 md:mt-0 mt-3">
                  <a
                    href="https://github.com/hellomrariful"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover:text-blue-400"
                    aria-label="GitHub"
                  >
                    <FaGithub></FaGithub>
                  </a>
                  <a
                    href="https://www.facebook.com/hellomrariful.id"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover:text-blue-400"
                    aria-label="GitHub"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hellomrariful/"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover:text-blue-400"
                    aria-label="Linkedin"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;