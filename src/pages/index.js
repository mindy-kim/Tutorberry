import React from "react";
import Banner from "../sections/home/Banner";
import InfoSections from "../sections/home/InfoSections";
import Offer from "../sections/home/Offer";
import PageWrapper from "../components/PageWrapper";

const LandingPage = () => {
  return (
    <>
      <PageWrapper>
        <Banner />
        <InfoSections />
        <Offer />
      </PageWrapper>
    </>
  );
};
export default LandingPage;
