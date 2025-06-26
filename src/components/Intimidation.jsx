import React from "react";

import intimidationImage from "../assets/IntimidationReporting.png";

function Intimidation() {
  return (
    <section
      id="intimidation"
      aria-label="Intimidation Reporting"
      className="flex flex-row justify-between items-center px-[150px] gap-[50px] scroll-mt-[90px]"
    >
      <div className="space-y-[24px]">
        <p className="text-[64px] font-semibold">Intimidation Reporting</p>
        <p className="text-[24px]">
          Has a professional staff member made you feel uncomfortable or
          threatened regarding your participation in union activity?{" "}
          <span className="font-bold">Let us know!</span> It is illegal for
          supervisors to threaten or coerce you regarding your participation in
          union activity.
        </p>
        <button className="btn-primary-yellow w-[275px] h-[80px] rounded-[40px] text-[24px]">
          Email Us
        </button>
      </div>
      <div>
        <img src={intimidationImage} className="" />
      </div>
    </section>
  );
}

export default Intimidation;
