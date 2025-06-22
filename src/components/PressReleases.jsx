import React from "react";

import PressItem from "./PressItem";

function PressReleases() {
  return (
    <section
      id="press"
      aria-label="Press Releases"
      className="flex flex-col justify-between px-[150px]"
    >
      <p className="text-[64px] font-semibold">Press Releases</p>
      <div className="flex flex-col gap-[18px]">
        <PressItem
          day="01"
          date="MAY 25'"
          title="Purdue RAs discuss unionizing as overcrowded dorms cause concern"
          source="The Exponent"
        />
        <PressItem
          day="01"
          date="MAY 25'"
          title="Purdue RAs discuss unionizing as overcrowded dorms cause concern"
          source="The Exponent"
        />
        <PressItem
          day="01"
          date="MAY 25'"
          title="Purdue RAs discuss unionizing as overcrowded dorms cause concern"
          source="The Exponent"
        />
      </div>
    </section>
  );
}

export default PressReleases;
