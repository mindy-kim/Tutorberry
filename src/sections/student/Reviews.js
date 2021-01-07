import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Span } from "../../components/Core";
import ReviewCard from "../../components/ReviewCard";

import imgR1 from "../../assets/image/jpeg/reviewer1.jpg";
import imgR2 from "../../assets/image/jpeg/reviewer2.jpg";
import imgR3 from "../../assets/image/jpeg/reviewer3.jpg";
import data from "../../data.json";

const { home: { reviews}} = data;

const Reviews = () => {
  return (
    <>
      <Section bg="#f7f7fb" borderBottom="1px solid #EAE9F2;">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="6" className="text-center">
              <Box className="text-center">
                <Title>{reviews.title}</Title>
              </Box>
              <Text mb={4}>
                {reviews.subtitle}
              </Text>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            {reviews.reviews.map(review => <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <ReviewCard
                name="Jonathan Taylor"
                image={imgR1}
                stars={5}
              >
                {review}
              </ReviewCard>
            </Col>)}
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Reviews;
