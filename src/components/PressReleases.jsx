import React from "react";

import PressItem from "./PressItem";

function PressReleases() {
  return (
    <section
      id="press"
      aria-label="Press Releases"
      className="flex flex-col justify-between px-6 md:px-[75px] lg:px-[150px] scroll-mt-[90px]"
    >
      <p className="text-[40px] sm:text-[48px] lg:text-[64px] font-semibold pb-6">Press Releases</p>
      <div className="flex flex-col gap-[18px]">
        <PressItem
          day="12"
          date="FEB 25'"
          title="Purdue RAs discuss unionizing as overcrowded dorms cause concern"
          source="WNDU"
        />
        <PressItem
          day="11"
          date="FEB 25'"
          title="Purdue's dorms could be home to Indiana's first undergraduate workers' union"
          source="Star City News"
        />
        <PressItem
          day="11"
          date="FEB 25'"
          title="Protesters gather at Smalley Center as admin meets with RA union"
          source="The Exponent"
        />
        <PressItem
          day="11"
          date="FEB 25'"
          title="RAs at Purdue bringing attention to overcrowded dowms, discussing unionizing"
          source="WTHR Indianapolis"
        />
        <PressItem
          day="09"
          date="FEB 25'"
          title="Purdue dorm RAs push case for a union"
          source="Pressreader"
        />
        <PressItem
          day="06"
          date="FEB 25'"
          title="Purdue Resident Assistants Push for Unionization"
          source="WLFI"
        />
        <PressItem
          day="04"
          date="FEB 25'"
          title="Purdue dorm resident assistants push their case for a union; top concern is sharing rooms"
          source="Journal & Courier"
        />
        <PressItem
          day="27"
          date="JAN 25'"
          title="Purdue RAs take first steps twoard unionization"
          source="The Exponent"
        />
      </div>
    </section>
  );
}

export default PressReleases;
