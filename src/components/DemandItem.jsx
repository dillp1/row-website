import React from "react";
import { BadgeCheck, CircleAlert, Megaphone } from "lucide-react";

function DemandItem({ status, text }) {
  let Icon;
  let bgColor;
  switch (status) {
    case "met":
      Icon = BadgeCheck;
      bgColor = "bg-green-400"
      break;
    case "addressed":
      Icon = Megaphone;
      bgColor = "bg-yellow-400"
      break;
    case "unaddressed":
    default:
      Icon = CircleAlert;
      bgColor = "bg-red-400"
      break;
  }

  return (
    <div className="flex flex-row items-center md:items-start lg:items-center text-left gap-[15px]">
      <div className={`w-14 h-14 sm:w-12 sm:h-12 lg:w-18 lg:h-18 min-w-14 sm:min-w-12 lg:min-w-18 rounded-full ${bgColor} text-black flex items-center justify-center`}>
        <Icon className="w-8 h-8 sm:w-6 sm:h-6 lg:w-10 lg:h-10" />
      </div>
      <p className="text-[18px] sm:text-[20px] lg:text-[24px]">{text}</p>
    </div>
  );
}

export default DemandItem;
