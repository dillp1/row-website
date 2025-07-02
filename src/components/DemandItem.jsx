import React from "react";

function DemandItem({ icon, text }) {
  return (
    <div className="flex flex-row items-center md:items-start lg:items-center text-left gap-[15px]">
      <img src={icon} alt=""/>
      <p className="text-[18px] sm:text-[20px] lg:text-[24px]">{text}</p>
    </div>
  );
}

export default DemandItem;
