import React from "react";
import HowItWorks from "../sections/student/HowItWorks";
import InfoSections from "../sections/student/InfoSections";
import AvailableSubjects from "../sections/student/AvailableSubjects";
import Reviews from "../sections/student/Reviews";
import Author from "../sections/student/Author";
import Offer from "../sections/student/Offer";
import Faq from "../sections/student/Faq";
import CTA from "../sections/student/CTA";
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
