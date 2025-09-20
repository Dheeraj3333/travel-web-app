"use client";

import React from "react";
import Heading from "./Heading";
import Wrapper from "@/components/Wrapper/Wrapper";
import PersonalityCard from "./PersonalityCard";
import MeetSwiper from "./MeetSwiper";

const MeetSection = () => {
  return (
    <section>
      <Wrapper>
        <MeetLeaders />
        <MeetCluster />
      </Wrapper>
    </section>
  );
};

export default MeetSection;

function MeetLeaders() {
  return (
    <div className="meet-leaders-section mb-20">
      <Heading normalText="Meet Our" boldText="Leaders & Management" />
      <MeetSwiper />
    </div>
  );
}
function MeetCluster() {
  return (
    <div className="meet-leaders-section mb-20">
      <Heading normalText="Meet Our" boldText="Dedicated Cluster's" />
      <MeetSwiper />
    </div>
  );
}
