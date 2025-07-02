import React from "react";

function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 md:px-[75px] lg:px-[150px] gap-[40px] scroll-mt-[90px]"
    >
      <div className="space-y-[24px]">
        <p className="text-[40px] sm:text-[48px] lg:text-[64px] font-semibold">About Us</p>
        <div className="w-[60px] h-[4px] bg-yellow-500 rounded-full mb-2 mt-[-12px]"></div>
        <p className="text-[18px] sm:text-[20px] lg:text-[24px] leading-relaxed">
          We are ResLife Organized Workers (ROW) — the Resident Assistant Union at Purdue
          University in Indiana. Our mission is to advocate for fair working conditions,
          adequate support, and equitable policies for all Resident Assistants (RAs). We
          recognize that living and working in the same environment as the students we
          serve places unique demands on RAs. By forming a union, we are creating a collective
          voice to push for meaningful change, ensuring that RAs’ concerns are acknowledged,
          and fostering a healthier and more supportive campus community.
        </p>
      </div>
    </section>
  );
}

export default About;
