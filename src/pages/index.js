import React from "react";
import Hero from "../sections/home/Hero";
import Testimonial from "../sections/home/Testimonial";
import Feature from "../sections/home/Feature";
import Content from "../sections/home/Content";
import Fact from "../sections/home/Fact";
import Reviews from "../sections/home/Reviews";
import Author from "../sections/home/Author";
import Offer from "../sections/home/Offer";
import Faq from "../sections/home/Faq";
import CTA from "../sections/home/CTA";
import PageWrapper from "../components/PageWrapper";

const LandingPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Testimonial />
        <Feature />
        <Content />
        <Offer />
        <Fact />
        <Reviews />
        <Author />
        <Faq />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage;
