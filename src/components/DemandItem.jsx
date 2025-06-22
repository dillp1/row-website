import React from "react";

function DemandItem({ icon, text }) {
  return (
    <div className="flex flex-row gap-[15px]">
      <img src={icon} alt="" className="" />
      <p>{text}</p>
    </div>
  );
}

export default DemandItem;
