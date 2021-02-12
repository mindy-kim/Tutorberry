import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import imgOfferBook from "../../assets/image/png/l6-offer-book.png";
import data from "../../data.json";

const SectionStyled = styled(Section)`
  padding-bottom: 100px;
  padding-top: 0;
`;

const OfferWrapper = styled(Box)`
  box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.ash};
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 50px;
`;

const BtnContainer = styled(Box)`
  margin-left: 100px;
  margin-top: 60px;
  @media ${device.lg} {
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const { home: { offer}} = data;


const Offer = () => (
  <>
    {/* <!-- Offer section 1 --> */}
    <SectionStyled bg="#f2f2f3">
      <Container>
        <OfferWrapper>
          <div className="d-flex flex-wrap">
            <div className="widget-image">
            </div>
            <div className="pt-3 pl-5">
              <Title variant="card" fontSize="24px" color="light" mb={3}>
                {offer.title}
              </Title>
              <Text color="lightShade" fontSize="18px" lineHeight="28px">
                {offer.subtitle}
              </Text>
            </div>
            <a href = "https://docs.google.com/forms/d/e/1FAIpQLSf7l6CNQckJswlA-cug4HqhoYGBXv0I0P0SLK7wCwtXWFw4wg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
            <BtnContainer>
              <Button margin="50px" float: "right">{offer.button}</Button>
            </BtnContainer>
            </a>
          </div>
        </OfferWrapper>
      </Container>
    </SectionStyled>
  </>
);

export default Offer;
