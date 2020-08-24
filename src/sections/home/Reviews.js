import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Span } from "../../components/Core";
import ReviewCard from "../../components/ReviewCard";

import imgR1 from "../../assets/image/jpeg/reviewer1.jpg";
import imgR2 from "../../assets/image/jpeg/reviewer2.jpg";
import imgR3 from "../../assets/image/jpeg/reviewer3.jpg";

const Reviews = () => {
  return (
    <>
      <Section bg="#f7f7fb" borderBottom="1px solid #EAE9F2;">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="6" className="text-center">
              <Box className="text-center">
                <Title>Reviews from Parents</Title>
              </Box>
              <Text mb={4}>
                Reviews from other appreciative parents.
              </Text>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <ReviewCard
                name="Jonathan Taylor"
                image={imgR1}
                stars={5}
              >
                "Review 1 here"
              </ReviewCard>
            </Col>
            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <ReviewCard
                name="Paromita Haque"
                image={imgR2}
                stars={4}
              >
                "Review 1 here"
              </ReviewCard>
            </Col>
            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <ReviewCard
                name="Trashee Habbard"
                image={imgR3}
                stars={5}
              >
                "Review 1 here"
              </ReviewCard>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Reviews;
