import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Input } from "../components/Core";

import PageWrapper from "../components/PageWrapper";

import Hero from "../sections/common/Hero";
import data from "../data.json";

const FormStyled = styled.form``;
const { contact: {phone, email}} = data;

const Contact = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero title="Get in touch">
          Questions? Comments? Give us a ring
        </Hero>
        <Section>
          <Container>
            <Box mb={5}>
              <Title>We are always open 24/7 for you.</Title>
            </Box>
            <Box className="mb-5">
              <Title variant="card" fontSize="24px">
                Email us
              </Title>
              <Text>{email}</Text>
            </Box>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Contact;
