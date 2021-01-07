import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Text } from "../../components/Core";
import data from "../../data.json";

const SectionStyled = styled(Section)`
  /* border-bottom: 1px solid #eae9f2; */
`;

const { student: { cta}} = data;

const CTA = () => (
  <>
    <SectionStyled bg="#F6F6F8" className="position-relative">
      <Container>
        <Row>
          <Col lg="8" xl="7">
            <div className="py-4">
              <Title>{cta.title}</Title>
              <Text>
                {cta.subtitle}
              </Text>
            </div>
          </Col>
          <Col
            lg="4"
            xl="5"
            className="d-flex align-items-center justify-content-lg-end mt-4 mt-md-0"
          >
            <div>
              <Button>{cta.button}</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default CTA;
