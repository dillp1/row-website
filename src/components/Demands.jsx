import React from "react";

import DemandItem from "./DemandItem";

import metIcon from "../assets/MetNotification.svg";
import addressedIcon from "../assets/AddressedNotification.svg";
import unaddressedIcon from "../assets/UnaddressedNotification.svg";

function Demands() {
  return (
    <section
      id="demands"
      aria-label="Demands"
      className="flex flex-col px-[150px] scroll-mt-[90px]"
    >
      <p className="text-[64px] font-semibold pb-[25px]">We Demand...</p>
      <div className="grid grid-cols-2 gap-[40px]">
        <DemandItem
          icon={metIcon}
          text="... that any ResLife student staff never be assigned to share a living space with residents or a bedroom with any other individuals."
        />
        <DemandItem
          icon={metIcon}
          text="... that any ResLife student staff never be assigned to share a living space with residents or a bedroom with any other individuals."
        />
        <DemandItem
          icon={addressedIcon}
          text="... that any ResLife student staff never be assigned to share a living space with residents or a bedroom with any other individuals."
        />
        <DemandItem
          icon={addressedIcon}
          text="... that any ResLife student staff never be assigned to share a living space with residents or a bedroom with any other individuals."
        />
        <DemandItem
          icon={unaddressedIcon}
          text="... that any ResLife student staff never be assigned to share a living space with residents or a bedroom with any other individuals."
        />
        <DemandItem
          icon={unaddressedIcon}
          text="... that any ResLife student staff never be assigned to share a living space with residents or a bedroom with any other individuals."
        />
      </div>
    </section>
  );
}

export default Demands;
