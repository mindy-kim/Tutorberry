import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Content from "../sections/about/Content";
import Team from "../sections/about/Team";
import WantToJoin from "../sections/about/WantToJoin";
import data from "../data.json";

const { about: {about_us: {title, subtitle}}} = data;

const About = () => {
  return (
    <>
      <PageWrapper>
        <Hero title={title}>
          {subtitle}
        </Hero>
        <Content />
        <Team />
      </PageWrapper>
    </>
  );
};
export default About;
