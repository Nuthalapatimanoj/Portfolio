import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">MANOJ</h3>
            <p className="text-lg mb-8">
              {" "}
              Full-Stack Developer, specializing in web and software
              development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <h3 className="text-xl uppercase text-designColor tracking-wider">
              Quick Link
            </h3>
            <ul className="flex flex-row gap-4 font-titleFont font-medium py-6 overflow-hidden">
              <a href="#home" className="hover:text-red-400">
                Home
              </a>
              <a href="#about" className="hover:text-red-400">
                About me
              </a>
              <a href="#projects" className="hover:text-red-400">
                Projects
              </a>
              <a href="#resume" className="hover:text-red-400">
                Resume
              </a>
              <a href="#contact" className="hover:text-red-400">
                Contact
              </a>
            </ul>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center "
        >
          <p className=" text-lg mb-8">
            &copy; {new Date().getFullYear()} Yousaf. All rights reserved.
          </p>
          <div className="flex space-x-2 my-4 md:my-0">
            <a
              href="https://www.linkedin.com/in/manojn30/"
              className="text-lg mb-8 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Nuthalapatimanoj"
              className="text-lg mb-8 hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-2 ">
            <a href="#" className="text-lg mb-8 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-lg mb-8 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
