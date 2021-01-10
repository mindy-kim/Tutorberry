import React from "react";
import HowItWorks1 from "../sections/volunteer/HowItWorks1";
hello
import Clients from "../sections/volunteer/Clients";
import Reviews from "../sections/volunteer/Reviews";
import Faq from "../sections/volunteer/Faq";
import CTA from "../sections/volunteer/CTA";
import PageWrapper from "../components/PageWrapper";

const LandingPage = () => {
  return (
    <>
      <PageWrapper>
        <HowItWorks />
        <Clients />
        <Reviews />
        <Faq />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage;
