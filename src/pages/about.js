import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Content from "../sections/about/Content";
import Team from "../sections/about/Team";
import WantToJoin from "../sections/about/WantToJoin";

const About = () => {
  return (
    <>
      <PageWrapper>
        <Hero title="About us">
          About our company
        </Hero>
        <Content />
        <Team />
        <WantToJoin />
      </PageWrapper>
    </>
  );
};
export default About;
