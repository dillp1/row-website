import React from "react";

function DemandItem({ icon, text }) {
  return (
    <div className="flex flex-row gap-[15px]">
      <img src={icon} alt=""/>
      <p className="lg:text-[22px]">{text}</p>
    </div>
  );
}

export default DemandItem;
