import React from "react";
import HowItWorks from "../sections/volunteer/HowItWorks";
import AvailableSubjects from "../sections/volunteer/AvailableSubjects";
import Reviews from "../sections/volunteer/Reviews";
import Offer from "../sections/volunteer/Offer";
import Faq from "../sections/volunteer/Faq";
import CTA from "../sections/volunteer/CTA";
import PageWrapper from "../components/PageWrapper";

const LandingPage = () => {
  return (
    <>
      <PageWrapper>
        <HowItWorks />
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
