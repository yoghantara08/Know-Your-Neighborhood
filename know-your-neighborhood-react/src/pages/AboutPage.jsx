import React from "react";
import { hero2, store2 } from "../assets";
import LayoutFull from "../components/layout/LayoutFull";

const AboutPage = () => {
  return (
    <LayoutFull>
      <section
        className="min-h-[35vh] w-full bg-cover bg-center relative flex justify-center px-6
        after:absolute after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t
        after:from-[#0000004d] after:to-[#00000033]"
        style={{ backgroundImage: `url(${hero2})` }}
      >
        <div className="max-w-[1280px] text-white w-full relative z-10">
          <div className="flex justify-center items-center pt-20">
            <h2 className="font-inter font-bold text-5xl text-color2 drop-shadow-lg text-center">
              About Us
            </h2>
          </div>
        </div>
      </section>
      <section className="flex justify-center text-primary px-6 mt-8">
        <div className="max-w-[1280px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gray-600">
              <h3 className="text-3xl underline font-bold text-color1 drop-shadow mb-2">
                Know Your Neighborhood
              </h3>
              <p className="mb-2">
                Welcome to "Know Your Neighborhood"! We're a team of locals who
                are passionate about helping people get to know and love their
                community. We know that each neighborhood is unique, which is
                why we've created a website that celebrates the quirks and
                character of the place we call home. From local businesses and
                events, to community resources and news, our goal is to be a
                one-stop-shop for all things local.
              </p>
              <p>
                But we're more than just a resource. We believe in the power of
                community, which is why we've included features like message
                boards and user-generated content. We want "Know Your
                Neighborhood" to be a place where neighbors can connect and
                engage with each other. So whether you're new to the
                neighborhood or a lifelong resident, we hope you'll join us in
                celebrating all that makes our community special. Thank you for
                choosing "Know Your Neighborhood" as your go-to source for all
                things local.
              </p>
            </div>
            <img
              src={store2}
              alt="about_us"
              className="rounded-md shadow-lg aspect-video object-cover"
            />
          </div>
        </div>
      </section>
    </LayoutFull>
  );
};

export default AboutPage;
