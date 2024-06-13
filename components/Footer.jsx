
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white ">
      <div className="">
        <footer className="bg-gradient-to-br from-[#a600fe] to-[#a600fe]">
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
                  className="mx-4 transition-colors duration-300 hover:text-[#524FF5]"
                >
              About
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
                  className="mx-4  transition-colors duration-300 hover:text-[#524FF5]"
                >
                  Return Policy
                </a>
                <a
                  href=""
                  className="mx-4 transition-colors duration-300 hover:text-[#524FF5]"
                >
                  Book a Demo
                </a>
                
              </div>
            </div>

            <div className="px-6 -mb-2">
              <hr className="border-text-darkGray mb-3 mt-8" />

              <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                <p className=" text-[#858585] dark:text-gray-300">
                  © Anolipi Digital LLC 2024. All Rights Reserved.
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
                    href="https://www.facebook.com/Anolipi.digital"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover:text-blue-400"
                    aria-label="GitHub"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://linkedin.com/company/anolipi/"
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