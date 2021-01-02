import React from "react";
import HowItWorks from "../sections/volunteer/HowItWorks1.js";
import InfoSections from "../sections/volunteer/InfoSections1";
import AvailableSubjects from "../sections/volunteer/AvailableSubjects1";
import Reviews from "../sections/volunteer/Reviews1";
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
