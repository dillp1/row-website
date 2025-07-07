import React from "react";

import DemandItem from "./DemandItem";

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
          status="met"
          text="... that any ResLife student staff never be assigned to share a living space with residents or a bedroom with any other individuals."
        />
        <DemandItem
          status="unaddressed"
          text="... a guaranteed severance package for any ResLife student staff who resigns or is fired. This should include, but not be limited to, the option of housing and a meal plan for the remainder of the given academic year."
        />
        <DemandItem
          status="unaddressed"
          text="... any ResLife student staff required to use personal vehicles to do their job in a timely manner be provided vehicle reimbursements consistent with the IRS standard mileage rates."
        />
        <DemandItem
          status="unaddressed"
          text="... any ResLife student staff required to live in housing without air conditioning be provided with box fans."
        />
        <DemandItem
          status="unaddressed"
          text="... all ResLife student staff be guaranteed free parking."
        />
        <DemandItem
          status="unaddressed"
          text="... that contracts will move from at-will employment to just-cause employment, and will not change without mutual agreement after being signed and accepted."
        />
        <DemandItem
          status="unaddressed"
          text="... every ResLife student staff member be able to choose which meal plan they want."
        />
        <DemandItem
          status="unaddressed"
          text="... at most 40 residents be assigned to any given RA."
        />
        <DemandItem
          status="unaddressed"
          text="... at least one mental health counselor to be on call for all ResLife student staff who is not a Title IX mandatory reporter."
        />
        <DemandItem
          status="unaddressed"
          text="... to no longer be compelled to work front desk shifts without additional compensation."
        />
        <DemandItem
          status="unaddressed"
          text="... transparency regarding traumatic events and deaths within the community."
        />
        <DemandItem
          status="unaddressed"
          text="... free laundry for all ResLife student staff."
        />
      </div>
    </section>
  );
}

export default Demands;
