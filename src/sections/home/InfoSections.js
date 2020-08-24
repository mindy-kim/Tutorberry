import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Box, Text } from "../../components/Core";

import studentRun from "../../assets/image/svg/student-run.svg";
import fullyOnline from "../../assets/image/svg/fully-online.svg";
import subjects from "../../assets/image/svg/subjects.svg";

const BoxStyled = styled(Box)`
  border-bottom: 1px solid #eae9f2;
`;

const IconImage = styled.img`
  display: block;
  max-height: 100px;
`

const FeatureCard = ({ iconImage, title, children, ...rest }) => (
  <Box {...rest} className="d-flex flex-column align-items-center">
    <Box mb={[3, 3, 3, 4]} pb={2}>
      <IconImage src={iconImage} alt="" />
    </Box>
    <Box className="text-center">
      <Title variant="card" fontSize="24px" mb={3}>
        {title}
      </Title>
      <Text variant="small">{children}</Text>
    </Box>
  </Box>
);

const InfoSections = () => (
  <>
    <BoxStyled bg="#f6f6f8" pb={["50px!important"]}>
      <Container>
        <Row className="justify-content-center pt-5">
          <Col lg="4" className="mb-5 mb-lg-4">
            <FeatureCard title="Fully Student Run" iconImage={studentRun}>
              All tutors are experienced highschool students with backgrounds in a variety of subjects.
              Every tutor has the experience and education necessary to guide students through difficult subjects.
            </FeatureCard>
          </Col>
          <Col lg="4" className="mb-5 mb-lg-4">
            <FeatureCard title="Virtual Sessions" iconImage={fullyOnline}>
              Students meet with tutors one-on-one through video calls with the Zoom platform.
              Communication is crucial, and Tutorberry will maintain close contact and always be open for questions or comments.
            </FeatureCard>
          </Col>
          <Col lg="4" className="mb-5 mb-lg-4">
            <FeatureCard title="Wide Variety of Subjects" iconImage={subjects}>
              Our tutors are experienced in and prepared to teach a variety of subjects, such as Math, Language Arts, Foreign Studies, and Social Studies.
              Each tutor will work closely with the student.
            </FeatureCard>
          </Col>
        </Row>
      </Container>
    </BoxStyled>
  </>
);

export default InfoSections;
