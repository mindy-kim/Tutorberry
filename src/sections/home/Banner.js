import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Span } from "../../components/Core";

import { device } from "../../utils";

import svgStudy from "../../assets/image/svg/study.svg";

const ImgRight = styled(Box)`
  max-width: 80%;
  margin-left: -35px;
  @media ${device.sm} {
    max-width: unset;
    margin-left: -35px;
    position: relative;
    left: -35px;
  }
  @media ${device.md} {
    margin-left: -85px;
    position: relative;
    left: -35px;
  }
`;

const ULStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding-top: 0;
  padding-left: 0;

  li {
    &:nth-child(odd) {
      @media ${device.sm} {
        margin-right: 40px;
      }
    }
    color: #19191b;
    font-size: 21px;
    font-weight: 500;
    letter-spacing: -0.66px;
    line-height: 50px;
    display: flex;
    margin-bottom: 5px;

    &:before {
      content: "\f00c";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      display: inline-block;
      font-size: 13px;
      width: 30px;
      min-width: 30px;
      height: 30px;
      background-color: ${({ theme }) => rgba(theme.colors.secondary, 0.1)};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 500px;
      color: ${({ theme }) => theme.colors.secondary};
      position: relative;
      top: 10px;
      margin-right: 13px;
    }
  }
`;

const Banner = () => {
  return (
    <>
      {/* <!-- Banner Area --> */}
      <Section bg="#f6f6f8" className="position-relative" pb="30px !important">
        <div className="pt-5"></div>
        <Container>
          <Row className="align-items-center position-relative">
            <Col
              lg="4"
              xl="5"
              className="position-static"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <ImgRight>
                <img src={svgStudy} alt="" className="img-fluid" />
              </ImgRight>
            </Col>
            <Col lg="8" xl="7">
              <div
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <Box pt={[4, null, null, 0]} pl={5}>
                  <Title>
                    Free Online Tutoring <br className="d-none d-sm-block" />
                    for K-12 Students.
                  </Title>
                  <Box mb={3}>
                    <ULStyled>
                      <li>Fully Virtual</li>
                      <li>100% Free</li>
                      <li>Variety of Subjects</li>
                    </ULStyled>
                  </Box>
                  <div className="d-flex flex-column align-items-start pt-2">
                    <Button onclick="location.href='https://forms.gle/F9Z2sgAHBV693JVg6'" mb={2}>Register for FREE Tutoring</Button>
                  </div>
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Banner;
