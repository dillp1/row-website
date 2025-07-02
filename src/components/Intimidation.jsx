import React from "react";

import intimidationImage from "../assets/IntimidationReporting.png";

function Intimidation() {
  return (
    <section
      id="intimidation"
      aria-label="Intimidation Reporting"
      className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 md:px-[75px] lg:px-[150px] gap-[40px] scroll-mt-[90px]"
    >
      <div className="space-y-[24px]">
        <p className="text-[40px] sm:text-[48px] lg:text-[64px] font-semibold">Intimidation Reporting</p>
        <p className="text-[18px] sm:text-[20px] lg:text-[24px]">
          Has a professional staff member made you feel uncomfortable or
          threatened regarding your participation in union activity?{" "}
          <span className="font-bold">Let us know!</span> It is illegal for
          supervisors to threaten or coerce you regarding your participation in
          union activity. Email us with amy futher questions or concerns!
        </p>
        <a href="https://iga.in.gov/laws/2018/ic/titles/4#4-15-17" className="text-blue-200 underline hover:text-blue-300 text-[18px] sm:text-[20px] lg:text-[24px] block">
          <p className="">
            Click here for more information on Indiana State Law regarding
            unionizing (collective bargaining), specifically IC 4-15-17.
          </p>
        </a>
        <p className="text-[18px] sm:text-[20px] lg:text-[24px] italic">
          Of note: Purdue University is exempt from the prohibition on
          collective bargaining with the state.
        </p>
        <a href="mailto:row.purdue.uni@gmail.com">
          <button className="btn-primary-yellow text-black w-full sm:w-[275px] h-[60px] sm:h-[80px] rounded-[40px] text-[18px] sm:text-[24px]">
            Email Us
          </button>
        </a>
      </div>
      <div>
        <img src={intimidationImage} alt="" className="w-full max-w-[500px] lg:w-[400px] h-auto object-contain" />
      </div>
    </section>
  );
}

export default Intimidation;
