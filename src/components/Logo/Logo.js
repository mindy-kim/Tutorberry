import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const SiteTitle = styled.h1`
  font-size: 2rem !important;
  color: #21BF73;
`

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      {white ? (
        <SiteTitle>Tutorberry.</SiteTitle>
      ) : (
        <SiteTitle>Tutorberry.</SiteTitle>
      )}
    </Link>
  );
};

export default Logo;
