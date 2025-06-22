import React from "react";

function Hero() {
  return (
    <section
      aria-label="Hero"
      className="flex flex-row justify-between items-center px-[150px]"
    >
      <div className="flex flex-col space-y-[25px]">
        <p className="text-[96px] font-bold leading-tight">
          ResLife Organized Workers
        </p>
        <p className="text-[24px]">
          Representing all Resident Assistants and Residential Education
          Assistants at Purdue University
        </p>
        <div className="flex flex-row items-center gap-[15px]">
          <button className="btn-primary-yellow text-black w-[275px] h-[80px] rounded-[40px] text-[24px]">
            About Us
          </button>
          <button className="btn-secondary-yellow text-white w-[275px] h-[80px] rounded-[40px] text-[24px]">
            Sign A Card
          </button>
        </div>
      </div>
      <img src="/src/assets/row-logo.png" alt="ROW logo" className="" />
    </section>
  );
}

export default Hero;
