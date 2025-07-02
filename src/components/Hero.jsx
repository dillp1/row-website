import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 lg:px-[150px] pt-[90px] gap-[40px] lg:text-left"
    >
      <div className="flex flex-col space-y-[25px] flex-1 min-w-0">
        <p className="text-[40px] sm:text-[60px] lg:text-[96px] font-bold leading-tight">
          ResLife Organized Workers
        </p>
        <p className="text-[16px] sm:text-[20px] lg:text-[24px]">
          Representing all Resident Assistants and Residential Education
          Assistants at Purdue University
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-[15px]">
          <button className="btn-primary-yellow text-black w-full sm:w-[275px] h-[60px] sm:h-[80px] rounded-[40px] text-[18px] sm:text-[24px]">
            About Us
          </button>
          <button className="btn-secondary-yellow text-white w-full sm:w-[275px] h-[60px] sm:h-[80px] rounded-[40px] text-[18px] sm:text-[24px]">
            Sign A Card
          </button>
        </div>
      </div>
      <img
        src="/src/assets/row-logo.png"
        alt="ROW logo"
        className="w-full max-w-[300px] lg:max-w-[600px] h-auto object-contain"
      />
    </section>
  );
}

export default Hero;
