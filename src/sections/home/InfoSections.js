import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Box, Text } from "../../components/Core";

import studentRun from "../../assets/image/svg/student-run.svg";
import fullyOnline from "../../assets/image/svg/fully-online.svg";
import subjects from "../../assets/image/svg/subjects.svg";
import data from '../../data.json';

const BoxStyled = styled(Box)`
  border-bottom: 1px solid #eae9f2;
`;

const IconImage = styled.img`
  display: block;
  max-height: 100px;
`

const { student: { info_section}} = data;


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

const images = [studentRun, fullyOnline, subjects]

const InfoSections = () => (
  <>
    <BoxStyled bg="#f6f6f8" pb={["50px!important"]}>
      <Container>
        <Row className="justify-content-center pt-5">
          {
            info_section.features.map((feature, i) => <Col lg="4" className="mb-5 mb-lg-4">

              <FeatureCard title={feature.title} iconImage={images[i]}>
                {feature.description}
              </FeatureCard>
            </Col>)
          }
        </Row>
      </Container>
    </BoxStyled>
  </>
);

export default InfoSections;
