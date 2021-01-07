import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";
import data from "../../data.json";

const SectionStyled = styled(Section)``;

const FaqCard = styled(Box)`
  padding-left: 55px;
  position: relative;
  &::before {
    content: "\f061";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    min-width: 30px;
    min-height: 30px;
    max-height: 30px;
    font-size: 15px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.light};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 500px;
    position: absolute;
    left: 0;
  }
`;

const FaqTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.light};
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.75px;
  margin-bottom: 24px;
  line-height: 2rem;
`;
const { faq: {volunteer_questions: {questions}}} = data;

const Faq = () => (
  <>
    {/* <!-- Faq section --> */}
    <SectionStyled bg="ash">
      <Container>
        <Row>
          {
            questions.map(question => <Col lg="6" className="mb-5">
              <FaqCard>
                <div>
                  <FaqTitle>{question.title}</FaqTitle>
                  <Text variant="small" color="light" opacity={0.7}>
                    {question.answer}
                  </Text>
                </div>
              </FaqCard>
            </Col>)
          }
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Faq;
