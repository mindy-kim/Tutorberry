import React from "react";
import Banner from "../sections/home/Banner";
import PageWrapper from "../components/PageWrapper";
import InfoSections from "../sections/home/InfoSections";

const LandingPage = () => {
  return (
    <>
      <PageWrapper>
        <Banner />
        <InfoSections />
      </PageWrapper>
    </>
  );
};
export default LandingPage;
