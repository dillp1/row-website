import React from "react";

function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 md:px-[75px] lg:px-[150px] gap-[40px] scroll-mt-[90px] leading-relaxed"
    >
      <div className="space-y-6">
        {/* About Us */}
        <div className="">
          <p className="text-[40px] sm:text-[60px] lg:text-[64px] font-semibold">
            About Us
          </p>
          <p className="text-[18px] sm:text-[20px] lg:text-[24px]">
            We are ResLife Organized Workers (ROW) — the Resident
            Assistant Union at Purdue University in Indiana. Our
            mission is to advocate for fair working conditions,
            adequate support, and equitable policies for all Resident
            Assistants (RAs). We recognize that living and working
            in the same environment as the students we serve places
            unique demands on RAs. By forming a union, we are
            creating a collective voice to push for meaningful
            change, ensuring that RAs’ concerns are acknowledged,
            and fostering a healthier and more supportive campus
            community.
          </p>
        </div>

        {/* Why */}
        <div className="">
          <p className="text-[40px] sm:text-[60px] lg:text-[64px] font-semibold">
            Why Do We Need a Union?
          </p>
          <div className="space-y-6 text-[18px] sm:text-[20px] lg:text-[24px]">
            <p className="">
              RAs experience a distinctive blend of responsibilities
              that blur the lines between personal and professional
              life, often leading to stress, burnout, and compromised
              well-being. With ongoing housing challenges at Purdue,
              many RAs find themselves stretched thin—sometimes
              overseeing upwards of 70 residents—without corresponding
              compensation or support. Moreover, having to room with
              residents intensifies mental health strain and erodes
              professional boundaries, affecting both the RA and their
              peers.
            </p>
            <p className="">
              Compounding these issues is a lack of sufficient recourse
              when professional staff fail to offer adequate support,
              creating work environments where RAs bear an excessive
              burden. Traumatic events, including student or staff
              deaths, often receive little to no follow-up or mental
              health assistance, leaving RAs to shoulder these crises
              on their own. Mandatory reporting requirements further
              complicate the RA-resident relationship by inhibiting
              open discussion of serious disclosures such as sexual
              assault.
            </p>
            <p className="">
              A union allows RAs to collectively address these
              challenges by advocating for enforceable workload
              limits, improved living conditions, and accessible
              mental health support. Through organized efforts, we
              can ensure that Resident Assistants receive the respect,
              fair treatment, and resources necessary to best serve
              their residents—and themselves.
            </p>
          </div>
        </div>

        {/* How you can help */}
        <div className="">
          <p className="text-[40px] sm:text-[60px] lg:text-[64px] font-semibold">
            How You Can Help
          </p>
          <div className="space-y-6 text-[18px] sm:text-[20px] lg:text-[24px] grid grid-cols-1 lg:grid-cols-3 lg:gap-[40px]">
            <p className="">
              <strong>📝 Sign a Union Card (Purdue RAs & REAs Only)</strong><br />
              If you are a Resident Assistant (RA), one of the
              most impactful actions you can take is to sign a
              union card. This process is entirely anonymous until
              we surpass our goal of securing signatures from at
              least half of eligible workers. Meeting this threshold
              gives us the collective power to formally request
              recognition as a union from Purdue University. Your
              signature helps build momentum and shows our shared
              commitment to improving working conditions for all RAs.
            </p>
            <p className="">
              <strong>🤝 Volunteer at Events</strong><br />
              We frequently organize events aimed at raising awareness,
              fostering community, and sharing information about ROW’s
              mission and goals. Check our calendar for upcoming
              gatherings—whether workshops, rallies, or info sessions—and
              consider volunteering to help make them a success. If you
              see an event that interests you, or if you have ideas for
              new events, please reach out to our email and let us know
              how you’d like to be involved!
            </p>
            <p className="">
              <strong>📣 Spread the Word</strong><br />
              Finally, word of mouth is one of our strongest tools. Let
              your friends, colleagues, and fellow RAs know about ROW.
              If you know someone who is considering becoming an RA,
              encourage them to learn about our union efforts. Direct
              them to this website or provide our email for more information.
              The larger our network grows, the stronger our collective
              voice will be in demanding positive change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
