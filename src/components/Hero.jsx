import React from "react";

import logo from "../assets/row-logo.png";

function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 md:px-[75px] lg:px-[150px] pt-[100px] lg:pt-[150px] gap-[40px]"
    >
      <div className="flex flex-col space-y-[25px] flex-1 min-w-0">
        <p className="text-[40px] sm:text-[60px] lg:text-[96px] font-bold leading-tight">
          ResLife Organized Workers
        </p>
        <p className="text-[18px] sm:text-[20px] lg:text-[24px]">
          Representing all Resident Assistants and Residential Education
          Assistants at Purdue University
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full max-w-[600px]">
          <a href="#about" className="w-full sm:w-[275px]">
            <button className="btn-primary-yellow text-black w-full h-[60px] sm:h-[80px] rounded-[40px] text-[18px] sm:text-[24px] cursor-pointer">
              About Us
            </button>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScyYmeLkpljQs-8Ngmtu3Fg0zEr5xOT_pHMhwDg1t0IQSrSAA/viewform"
            className="w-full sm:w-[275px]"
          >
            <button className="btn-secondary-yellow text-white w-full h-[60px] sm:h-[80px] rounded-[40px] text-[18px] sm:text-[24px] cursor-pointer">
              Sign A Card
            </button>
          </a>
        </div>
      </div>
      <img
        src={logo}
        alt="ROW logo"
        className="w-full max-w-[225px] sm:max-w-[275px] md:max-w-[275px] lg:max-w-[600px] h-auto object-contain"
      />
    </section>
  );
}

export default Hero;
