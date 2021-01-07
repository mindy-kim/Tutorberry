import React from "react";
import HowItWorks from "../sections/volunteer/HowItWorks";
import Reviews from "../sections/volunteer/Reviews";
import Faq from "../sections/volunteer/Faq";
import CTA from "../sections/volunteer/CTA";
import PageWrapper from "../components/PageWrapper";

const LandingPage = () => {
  return (
    <>
      <PageWrapper>
        <HowItWorks />
        <Reviews />
        <Faq />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage;
