import React from "react";
import { contact } from "../assets";
import LayoutFull from "../components/layout/LayoutFull";

const ContactPage = () => {
  return (
    <LayoutFull>
      <section
        className="min-h-[30vh] w-full bg-cover bg-center relative flex justify-center px-6
    after:absolute after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t
    after:from-[#0000004d] after:to-[#00000033]"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="max-w-[1280px] text-white w-full relative z-10">
          <div className="flex justify-center items-center pt-20">
            <h2 className="font-inter font-bold text-5xl text-white drop-shadow-lg text-center">
              Contact Us
            </h2>
          </div>
        </div>
      </section>
      <section className="flex justify-center text-primary px-6 mt-8">
        <div className="max-w-[1280px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            <form className="flex flex-col space-y-5 p-5 border shadow bg-gray-200">
              <h2 className="font-medium text-xl ml-1">Ask Question</h2>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="px-3 py-2 rounded"
              />
              <input
                type="text"
                name="email"
                placeholder="Your email"
                className="px-3 py-2 rounded"
              />
              <textarea
                name="message"
                placeholder="Your Question"
                className="px-3 py-2 rounded"
              />
              <button type="submit" className="mt-3 rounded bg-color1 py-3">
                Submit
              </button>
            </form>
            <div className="flex flex-col space-y-5 p-5 border shadow bg-gray-200 text-lg">
              <div className="text-center space-y-2">
                <i className="fa-sharp fa-solid fa-location-dot text-4xl" />
                <p>JL. Pegangsaan Timur No.54 Jakarta, Indonesia</p>
              </div>
              <div className="text-center space-y-2">
                <i className="fa-regular fa-envelope text-4xl" />
                <p>knowyourneighborhood@email.com</p>
              </div>
              <div className="text-center space-y-2">
                <i className="fa-solid fa-phone text-4xl" />
                <p>+628123456789, 0361889911</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutFull>
  );
};

export default ContactPage;
