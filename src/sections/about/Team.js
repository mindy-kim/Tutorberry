import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgU1 from "../../assets/image/jpeg/about-team-1.jpeg";
import imgU2 from "../../assets/image/jpeg/about-team-3.jpeg";
import imgU3 from "../../assets/image/jpeg/about-team-4.jpeg";
import imgU4 from "../../assets/image/jpeg/about-team-5.jpeg";
import imgU5 from "../../assets/image/jpeg/about-team-6.jpeg";
import imgU6 from "../../assets/image/jpeg/about-team-2.jpeg";
import data from "../../data.json";

const CardImage = styled.div`
  max-width: 160px;
  min-width: 160px;
  min-height: 160px;
  max-height: 160px;
  overflow: hidden;
  border-radius: 500px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 29px;
`;

const TeamCard = ({ userImg, title, children, ...rest }) => (
  <Box
    className="text-center"
    pt="15px"
    px="30px"
    borderRadius={10}
    mb={4}
    {...rest}
  >
    <CardImage>
      <img src={userImg} className="img-fluid" alt="" />
    </CardImage>
    <div className="text-center">
      <Title variant="card" fontSize="24px" letterSpacing={-0.75} my={1}>
        {title}
      </Title>
      <Text fontSize={2} lineHeight={1.75}>
        {children}
      </Text>
    </div>
  </Box>
);
const { about: {team: {title, subtitle, team}}} = data;

const imgs = [imgU1, imgU2, imgU3, imgU4, imgU5, imgU6];

const Team = () => (
  <>
    {/* <!-- Team section --> */}
    <Section className="position-relative pt-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" className="text-center pb-3">
            <div className="">
              <Title>{title}</Title>
              <Text>
                {subtitle}
              </Text>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          {
            team.map(t =>
              <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
                <TeamCard userImg={t.imgs} title={t.name}>
                  {t.title}
                </TeamCard>
              </Col>)
          }
        </Row>
      </Container>
    </Section>
  </>
);

export default Team;
