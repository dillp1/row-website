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
          link="https://www.wndu.com/2025/02/12/purdue-ras-discuss-unionizing-overcrowded-dorms-cause-concern/"
        />
        <PressItem
          day="11"
          date="FEB 25'"
          title="Purdue's dorms could be home to Indiana's first undergraduate workers' union"
          source="Star City News"
          link="https://www.starcitytv.com/news/purdue/purdues-dorms-could-be-home-to-indianas-first-undergraduate-workers-union/article_58d395d2-e8c3-11ef-9877-b7ff88b17e45.html"
        />
        <PressItem
          day="11"
          date="FEB 25'"
          title="Protesters gather at Smalley Center as admin meets with RA union"
          source="The Exponent"
          link="https://www.purdueexponent.org/campus/general_news/purdue-ra-union-meetings-rally/article_40e1ae40-e833-11ef-95cb-df2f97431eec.html"
        />
        <PressItem
          day="11"
          date="FEB 25'"
          title="RAs at Purdue bringing attention to overcrowded dowms, discussing unionizing"
          source="WTHR Indianapolis"
          link="https://www.wthr.com/article/news/local/resident-assistant-purdue-university-bringing-attention-overcrowded-dorms-discussing-unionizing-students-housing-ra-dorm-room-students-space-lafayette/531-eccfb0ae-af0d-46b4-ae75-88493001279e"
        />
        <PressItem
          day="09"
          date="FEB 25'"
          title="Purdue dorm RAs push case for a union"
          source="Pressreader"
          link="https://www.pressreader.com/usa/the-indianapolis-star/20250209/281642490878904"
        />
        <PressItem
          day="06"
          date="FEB 25'"
          title="Purdue Resident Assistants Push for Unionization"
          source="WLFI"
          link="https://www.wlfi.com/news/local/purdue-resident-assistants-push-for-unionization/article_aa2b6790-e4de-11ef-bf7e-2fe4274188cb.html"
        />
        <PressItem
          day="04"
          date="FEB 25'"
          title="Purdue dorm resident assistants push their case for a union; top concern is sharing rooms"
          source="Journal & Courier"
          link="https://www.jconline.com/story/news/local/purdue/2025/02/04/purdue-dorm-resident-assistants-push-their-case-for-a-union/78185583007/"
        />
        <PressItem
          day="27"
          date="JAN 25'"
          title="Purdue RAs take first steps twoard unionization"
          source="The Exponent"
          link="https://www.purdueexponent.org/campus/general_news/purdue-resident-assistant-union/article_ce42ff84-dcf1-11ef-aa53-c7899ad4d34b.html"
        />
      </div>
    </section>
  );
}

export default PressReleases;
