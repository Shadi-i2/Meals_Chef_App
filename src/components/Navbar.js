import React, { useContext } from "react";
import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../assets/mealschefLogo.png";
import { FaCartShopping, FaWallet } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { MealContext } from "./MealContext";
import { motion } from "framer-motion";

const NavContainer = styled.div`
  a {
    text-decoration: none !important;
    color: rgb(255, 255, 255);
    margin-right: 2rem;
    padding: 1rem;
    font-size: x-large;
    transition: all 0.6s;
  }
  a:hover {
    color: rgb(255, 227, 17);
  }
  .brand {
    color: #ffca2c !important;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
  }
  :is(.brand, .createMeal, .parentIcon) {
    pointer-events: none;
  }
  :is(
      .brand :where(img, span),
      .createMeal :where(span),
      .parentIcon :where(svg, span)
    ) {
    pointer-events: auto;
  }
  .icon {
    color: rgb(255, 255, 255);
  }
  .badgeAdd {
    padding: 0.8rem;
  }
  .createMeal.active span {
    background-color: rgba(
      var(--bs-warning-rgb),
      var(--bs-bg-opacity)
    ) !important;
  }
  .container button:focus {
    color: #fff;
  }
  .container button span {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" stroke="white" stroke-width="1.3" class="bi bi-list" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/></svg>');
    margin-top: -2px;
  }
  @media(max-width:450px){
    .navbar-brand {
      width: 225px !important;
      margin: 0;
    }
    a {
      margin-right: 0;
      font-size: large;
      padding: 1rem 0;
    }
    .brand {
      letter-spacing: 0.3rem;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
  @media(max-width:319px){
    .navbar-brand {
      width: 200px !important;
    }
  }
`;

const CardContainer = styled.div`
  .icon {
    border: 2px solid #fff;
    border-radius: 1rem;
    padding: 0.5rem;
    font-size: 3rem;
  }
  .badgeIcon {
    transform: translate(-1rem, -1rem);
    height: fit-content;
  }
`;

const NavBar = () => {
  const { totalOrders, totalPrice } = useContext(MealContext);
  return (
    <NavContainer
      as={motion.div}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink to={"/"} className="brand">
              <img src={Logo} width="60px" height="60px" alt="Logo" />
              <span>Meals Chef</span>
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 d-flex justify-content-end align-items-lg-center align-items-start">
              <Nav.Link as={NavLink} className="createMeal" to="/newMeal">
                <Badge pill bg="info" className="badgeAdd">
                  Add New
                </Badge>
              </Nav.Link>

              <Nav.Link className="parentIcon">
                <CardContainer>
                  <FaCartShopping className="icon" />
                  <Badge pill bg="info" className="badgeIcon">
                    {totalOrders}
                  </Badge>
                  <FaWallet className="icon" />
                  <Badge pill bg="info" className="badgeIcon">
                    $ {totalPrice}
                  </Badge>
                </CardContainer>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavContainer>
  );
};

export default NavBar;
