import React from "react";
import HowItWorks from "../sections/student/HowItWorks";
import AvailableSubjects from "../sections/student/AvailableSubjects";
import Reviews from "../sections/student/Reviews";
import Faq from "../sections/student/Faq";
import CTA from "../sections/student/CTA";
import PageWrapper from "../components/PageWrapper";

const LandingPage = () => {
  return (
    <>
      <PageWrapper>
        <HowItWorks />
        <AvailableSubjects />
        <Reviews />
        <Faq />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage;
