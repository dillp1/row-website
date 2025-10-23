import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Initiatives() {
  return (
    <section
      id="initiatives"
      aria-label="Current Initiatives"
      className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 md:px-[75px] lg:px-[150px] gap-[40px] scroll-mt-[90px]"
    >
      <div className="space-y-[24px]">
        <p className="text-[40px] sm:text-[48px] lg:text-[64px] font-semibold leading-snug mb-2">
          Current Initiatives
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Stand with Greg Gerardot</CardTitle>
            <CardDescription>10/23/2025</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>
              About a half a month ago, our fellow RA, Greg Gerardot, was fired
              for putting a Palestinian flag on an empty bulletin board. When he
              was asked to remove the flag, he covered it up with black butcher
              paper. After someone removed the cover without his knowledge, he
              was{" "}
              <span className="font-bold">
                immediately fired despite having no points beforehand
              </span>
              —meaning he was given 8 points for one disciplinary action.
            </p>
            <p>
              Time and time again, University Residences has taken full
              advantage of the statement that they “reserve the right to
              terminate your appointment at any time during the academic year at
              its sole and absolute discretion” (Student Staff Appointment
              Details 2025-2026). This is true despite{" "}
              <span className="font-bold">
                lacking clear, consistent, and comprehensive guidelines
              </span>{" "}
              for their 8-point disciplinary system. We deserve to know exactly
              what the grounds are for termination.
            </p>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <a href="https://docs.google.com/document/d/1uWrcdrOMkemyuBQkuwNGldCbRX_ueWjCWJiebpfR4aw/edit?tab=t.0">
              <Button variant="outline" className="w-full">
                Read The Story
              </Button>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfycmNGK-GoLCo-DYjL19hAIEG8Xst-wRVkRVTp5Ycu_TGMCg/viewform">
              <Button type="submit" className="w-full">
                Sign The Petition
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export default Initiatives;
