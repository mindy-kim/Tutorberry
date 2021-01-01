import React from "react";
import Banner from "../sections/home/Banner";
import HowItWorks from "../sections/home/HowItWorks";
import InfoSections from "../sections/home/InfoSections";
import AvailableSubjects from "../sections/home/AvailableSubjects";
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
        <Banner />
        <HowItWorks />
        <InfoSections />
        <AvailableSubjects />
        <Offer />
        <Reviews />
        <Faq />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage;
