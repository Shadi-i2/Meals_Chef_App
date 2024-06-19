import React from "react";
import styled from "styled-components";
import Logo from "../assets/mealschefLogo-black.png";

const Container = styled.div`
  padding: 2rem;
  display: grid;
  place-items: center;
  background-color: #fff;

`;
const LogoContainer = styled.div`
letter-spacing: 0.5rem;
text-transform: uppercase;
`;
const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="logo" width="60px" height="60px" />
        Meals Chef
      </LogoContainer>
    </Container>
  );
};

export default Footer;
