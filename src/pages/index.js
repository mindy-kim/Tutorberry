import React from "react";
import Banner from "../sections/home/Banner";
import PageWrapper from "../components/PageWrapper";
import InfoSections from "../sections/home/InfoSections";
import Offer from "../sections/home/Offer";

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
