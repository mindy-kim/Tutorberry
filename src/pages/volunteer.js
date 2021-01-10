import React from "react";
import HowItWorks1 from "../sections/volunteer/HowItWorks1";
import Clients1 from "../sections/volunteer/Clients1";
import Reviews1 from "../sections/volunteer/Reviews1";
import Faq1 from "../sections/volunteer/Faq1";
import CTA1 from "../sections/volunteer/CTA1";
import PageWrapper from "../components/PageWrapper";

const LandingPage = () => {
  return (
    <>
      <PageWrapper>
        <HowItWorks1 />
        <Clients1 />
        <Reviews1 />
        <Faq1 />
        <CTA1 />
      </PageWrapper>
    </>
  );
};
export default LandingPage;
