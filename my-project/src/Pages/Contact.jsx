import React, { useState } from "react";
import ContactImage from "../assets/contact.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9c5efa61-1538-4f21-9750-c4c5f56b9bbe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="contact"
      className=" bg-black text-black w-full py-20 w-full py-20 border-b-[1px] border-b-black "
    >
      <div className="container mx-auto px-5 md:px-15 lg:px-8">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <h2 className="text-4xl  text-white font-bold text-center mb-12">Let's Talk </h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="flex flex-col gap-4 text-white">
              <img
                src={ContactImage}
                alt=""
                className="w-72 h-60 rounded object-cover mb-8 md:mb-0"
              />
              <h3 className="text-lg mb-2">Let's talk</h3>
              <div className="flex space-x-4 my-2 md:my-0">
                <a
                  href="https://www.linkedin.com/in/manojn30/"
                  className="text-lg mb-8 hover:text-white"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Nuthalapatimanoj"
                  className="text-lg mb-8 hover:text-white"red
                >
                  <FaGithub />
                </a>
              </div>
              <p className="text-lg mb-1">
                Phone: <span className="text-lightText">+91 94355*****</span>
              </p>
              <p className="text-lg mb-1">
                Email:{" "}
                <span className="text-lightText">reactproject@gmail.com</span>
              </p>
            </div>

            <div className="flex-1">
              <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
                <form
                  onSubmit={onSubmit}
                  className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
                >
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-red-400 uppercase tracking-wide">
                      Your name
                    </p>
                    <input type="text" name="name" />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-red-400 uppercase tracking-wide">
                      Email
                    </p>
                    <input type="email" name="email" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-red-400 uppercase tracking-wide">
                      Message
                    </p>
                    <textarea name="message" cols="30" rows="8"></textarea>
                  </div>
                  <div className="w-full">
                    <button className="w-full h-12 bg-blue-500 rounded-lg text-base text-grey-400 text-bold tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
                      Send Message
                    </button>
                  </div>
                </form>
                <span className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">{result}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
