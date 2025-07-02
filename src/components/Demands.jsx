import React from "react";

import DemandItem from "./DemandItem";

import metIcon from "../assets/MetNotification.svg";
/* import addressedIcon from "../assets/AddressedNotification.svg"; */
import unaddressedIcon from "../assets/UnaddressedNotification.svg";

function Demands() {
  return (
    <section
      id="demands"
      aria-label="Demands"
      className="flex flex-col px-6 md:px-[75px] lg:px-[150px] scroll-mt-[90px]"
    >
      <p className="text-[40px] sm:text-[60px] lg:text-[64px] font-semibold pb-[25px]">We Demand...</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
        <DemandItem
          icon={metIcon}
          text="... that any ResLife student staff never be assigned to share a living space with residents or a bedroom with any other individuals."
        />
        <DemandItem
          icon={unaddressedIcon}
          text="... a guaranteed severance package for any ResLife student staff who resigns or is fired. This should include, but not be limited to, the option of housing and a meal plan for the remainder of the given academic year."
        />
        <DemandItem
          icon={unaddressedIcon}
          text="... any ResLife student staff required to use personal vehicles to do their job in a timely manner be provided vehicle reimbursements consistent with the IRS standard mileage rates."
        />
        <DemandItem
          icon={unaddressedIcon}
          text="... any ResLife student staff required to live in housing without air conditioning be provided with box fans."
        />
        <DemandItem
          icon={unaddressedIcon}
          text="... all ResLife student staff be guaranteed free parking."
        />
        <DemandItem
          icon={unaddressedIcon}
          text="... that contracts will move from at-will employment to just-cause employment, and will not change without mutual agreement after being signed and accepted."
        />
        <DemandItem
          icon={unaddressedIcon}
          text="... every ResLife student staff member be able to choose which meal plan they want."
        />
        <DemandItem
          icon={unaddressedIcon}
          text="... at most 40 residents be assigned to any given RA."
        />
        <DemandItem
          icon={unaddressedIcon}
          text="... at least one mental health counselor to be on call for all ResLife student staff who is not a Title IX mandatory reporter."
        />
        <DemandItem
          icon={unaddressedIcon}
          text="... to no longer be compelled to work front desk shifts without additional compensation."
        />
        <DemandItem
          icon={unaddressedIcon}
          text="... transparency regarding traumatic events and deaths within the community."
        />
        <DemandItem
          icon={unaddressedIcon}
          text="... free laundry for all ResLife student staff."
        />
      </div>
    </section>
  );
}

export default Demands;
