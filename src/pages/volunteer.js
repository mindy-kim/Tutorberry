import React from "react";
import HowItWorks from "src/sections/volunteer/HowItWorks1.js";
import InfoSections from "src/sections/volunteer/InfoSections1.js";
import AvailableSubjects from "../sections/volunteer/AvailableSubjects1.js";
import Reviews from "src/sections/volunteer/Reviews1.js";
import Author from "../sections/volunteer/Author1";
import Offer from "../sections/volunteer/Offer1";
import Faq from "../sections/volunteer/Faq1";
import CTA from "../sections/volunteer/CTA1";
import PageWrapper from "../components/PageWrapper";

const LandingPage = () => {
  return (
    <>
      <PageWrapper>
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
