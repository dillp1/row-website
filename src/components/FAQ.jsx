import React from "react";

import FAQItem from "./FAQItem";

function FAQ() {
  return (
    <section
      id="faq"
      aria-label="FAQ"
      className="flex flex-col justify-between px-6 md:px-[75px] lg:px-[150px] scroll-mt-[90px]"
    >
      <p className="text-[40px] sm:text-[48px] lg:text-[64px] font-semibold">FAQ</p>
      <FAQItem
        question="What does the acronym ROW stand for?"
        answer={
          <div className="leading-relaxed">
            <p>ROW stands for <strong>ResLife Organized Workers</strong>—the official name of our union.</p>
          </div>
        }
      />
      <FAQItem
        question="Is it legal to form an RA/REA union?"
        answer={
          <div className="space-y-6 leading-relaxed">
            <p>
              Yes! Purdue employees are public sector employees. This means we do not fall into the
              jurisdiction of the National Labor Relations Act. We are, however, legally allowed to
              unionize and bargain with our employer as public sector workers. Indiana state labor law
              (and well, law in general) is a pain to read and understand. This is our best attempt to
              make it make senses:
            </p>
            <p>
              <a
                className="underline text-yellow-300 hover:text-yellow-400"
                href="https://casetext.com/statute/indiana-code/title-4-state-offices-and-administration/article-15-personnel-administration/chapter-17-employee-organizations"
              >
                IC 4-15-17
              </a>{" "}
              is the chapter in the Indiana Code that gives Purdue Employees protection to organize.
              IC-4-15-17-3 defines “state” as a bunch of different departments but excludes “A state
              educational institution.” Purdue is one of those institutions which you can read in
              IC 21-7-13-32. Indiana prohibits employees of the state from bargaining with their employer
              in IC-4-15-17-4, but because we are excluded from the definition of “state,” we are legally
              allowed to unionize and collectively bargain with Purdue!
            </p>
            <p>
              So, yes, unionizing is 100% legal.{" "}
              <a
                className="underline text-yellow-300 hover:text-yellow-400"
                href="https://casetext.com/statute/indiana-code/title-4-state-offices-and-administration/article-15-personnel-administration/chapter-17-employee-organizations"
              >
                Here is a link to that chapter of Indiana Code to
                fact-check us.
              </a>{" "}
            </p>
          </div>
        }
      />
      <FAQItem
        question="What are the demands ROW is making?"
        answer={
          <div className="space-y-6 leading-relaxed">
            <a href="#demands" className="underline text-yellow-300 hover:text-yellow-400 block">
              <p>
                Full List of Demands
              </p>
            </a>
            <p>These demands outline the key issues we want to be addressed based on data collected
              by surveying some of our workforce.
            </p>
          </div>
        }
      />
      <FAQItem
        question="Why do we as RAs and REAs need a union?"
        answer={
          <div className="space-y-6 leading-relaxed list-disc list-inside">
            <li>
              RAs experience a distinctive blend of responsibilities that blur the lines between
              personal and professional life, often leading to stress, burnout, and compromised
              well-being. With ongoing housing challenges at Purdue, many RAs find themselves stretched
              thin—sometimes overseeing up to 70 residents—without corresponding compensation or
              support. Moreover, over 30% of RA’s have to share a bedroom with. This overload
              intensifies mental health strain and erodes professional boundaries, affecting both
              the RA and their peers.
            </li>
            <li>
              Compounding these issues is a lack of sufficient recourse when professional staff fail
              to offer adequate support, creating work environments where RAs bear an excessive
              burden. Traumatic events, including student or staff deaths, often receive little to
              no follow-up or mental health assistance (besides “go to CAPS), leaving RAs to shoulder
              these crises on their own.
            </li>
            <li>
              A union gives RAs a collective voice to negotiate fair conditions and resources, ensuring
              they can properly serve the thousands of students who rely on them. A union can effectively
              address issues such as RA’s sharing rooms with their residents, lack of consistent mental
              health support, lack of a guaranteed severance package, and more.
            </li>
          </div>
        }
      />
      <FAQItem
        question="What can a union do to help me? (as an RA or REA)"
        answer={
          <div className="space-y-6 leading-relaxed">
            <p>
              ROW is our union. As Purdue RA’s and REA’s, being apart of ROW means a formal organization
              to stand alongside you, whether you’re requesting more resources, pushing for policy reforms,
              or seeking protection against unfair treatment.
            </p>
            <p>
              Besides being able to negotiate contracts with the university to fight for our demands,
              joining ROW means you have people to fight for you. If you think your REC is treating you
              unfairly? You are upset with how a situation was handled by the administration? Did you
              feel uncomfortable with the topics of a staff meeting? Now you have coworkers ready to
              have your back.
            </p>
          </div>
        }
      />
      <FAQItem
        question="What can a union do to help my residents?"
        answer={
          <div className="space-y-6 leading-relaxed">
            <p>
              There are almost 18,000 residents across University Residences. A lot of the time, RA’s
              are the first contact by residents when they are having any sort of issue. We cannot
              properly do our jobs to help our residents if we say, have a roommate who is a resident.
              We can’t do our jobs effectively if we have no mental health support after dealing with
              a traumatic event involving residents. We can’t do our jobs effectively if we have an
              unmanageable amount of residents to attend to.
            </p>
            <p>
              There are aspects of our job as it stands that can make it impossible for us to provide
              the support our residents deserve. ROW will fight to change our working conditions. We
              will fight to end RA-resident roommates, get on-call mental health counselors for RA’s
              to turn to, and cap the number of residents we care for.
            </p>
          </div>
        }
      />
      <FAQItem
        question="Is striking something people do individually? How will a strike start?"
        answer={
          <div className="space-y-6 leading-relaxed">
            <p>
              Striking is not an individual decision. The entire union membership votes in what’s called
              a Strike Authorization. A majority “Yes” vote means the bargaining team can officially call
              a strike. Once a strike is authorized, union leadership will guide members through the
              process—providing information on tactics, resources, and how to handle potential pushback.
              Striking can be used for a variety of reasons, but for ROW, it would most likely be used if
              Purdue refuses to recognize us as a union.
            </p>
          </div>
        }
      />
      <FAQItem
        question="What would a strike look like for RAs/REAs?"
        answer={
          <div className="space-y-6 list-disc list-inside leading-relaxed">
            <div>
              <li className="font-bold">
                No completing or submitting paperwork.
              </li>
              <p>
                This includes program submissions, proposals, newsletter/bulletin board content, and incident reports.
              </p>
            </div>
            <div>
            <li className="font-bold">
              No attending staff meetings or one-on-ones.
            </li>
            </div>
            <div>
              <li className="font-bold">
                No enforcing non-safety-related policies.
              </li>
              <p>
                Things like quiet hours or guest hours would no longer be enforced during a strike, emphasizing the
                critical role RAs play in maintaining community standards.
              </p>
            </div>
            <div>
              <li className="font-bold">
                Maintaining emergency support.
              </li>
              <p>
                RAs would still be present for emergencies and to offer essential support to residents. The goal is
                never to endanger safety.
              </p>
            </div>
            <div>
              <li className="font-bold">
                No assigning points.
              </li>
              <p>
                REAs would withhold their participation in the disciplinary point system, demonstrating the importance
                of their role in community management.
              </p>
            </div>
          </div>
        }
      />
      <FAQItem
        question="I'm an international student—how can being part of a union affect my visa?"
        answer={
          <div>
            <p>
              The U.S. government cannot question you about your union participation when renewing your visa.
              For more information, you can refer to the{" "}
              <a
                className="underline text-yellow-300 hover:text-yellow-400"
                href="https://travel.state.gov/content/dam/visas/LegalRightsandProtections/Wilberforce/Wilberforce-ENG-DS-100116.pdf"
              >
                Wilberforce Pamphlet from the U.S. Department of State.
              </a>{" "}
              Additionally, we work closely with other organized groups (such as the{" "}
              <a
                className="underline text-yellow-300 hover:text-yellow-400"
                href="https://www.indianagradworkers.org/"
              >
                IGWC for graduate workers at IU
              </a>{""}
              ) who understand that employment for many international students is tied to tuition waivers and
              health insurance. Acting together as part of a large union can offer more protection and solidarity
              than acting alone. If any member faces retaliation, the union is prepared to respond and organize
              in support. There is strength in numbers!
            </p>
          </div>
        }
      />
    </section>
  );
}

export default FAQ;
