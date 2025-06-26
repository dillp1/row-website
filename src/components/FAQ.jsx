import React from "react";

import FAQItem from "./FAQItem";

function FAQ() {
  return (
    <section
      id="faq"
      aria-label="FAQ"
      className="flex flex-col justify-between px-[150px] scroll-mt-[90px]"
    >
      <p className="text-[64px] font-semibold">FAQ</p>
      <FAQItem
        question="What does the acronym ROW stand for?"
        answer="ROW stands for ResLife Organized Workers—the official name of our union."
      />
      <FAQItem
        question="What does the acronym ROW stand for?"
        answer="ROW stands for ResLife Organized Workers—the official name of our union."
      />
      <FAQItem
        question="What does the acronym ROW stand for?"
        answer="ROW stands for ResLife Organized Workers—the official name of our union."
      />
    </section>
  );
}

export default FAQ;
