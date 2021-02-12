import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgContent1 from "../../assets/image/jpeg/about-team-6.jpeg";
import data from "../../data.json";

const ContentImg = styled(Box)`
  box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  overflow: hidden;
  max-height: 515px;
`;
const { about: {about_us: {Content: {title, subtitle}}}} = data;

const Content = () => (
  <>
    <Section>
      <Container>
        <Row className="justify-content-center pb-4">
          <Col lg="6">
            <Title variant="hero">
              {title}
            </Title>
          </Col>
          <Col lg="6" className="pl-lg-5">
            <Text>
              {subtitle}
            </Text>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="12" sm="12" className="mb-4">
            <ContentImg>
              <img src={imgContent1} alt="" className="img-fluid" />
            </ContentImg>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content;
