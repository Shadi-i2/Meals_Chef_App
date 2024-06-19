import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { FaSearch, FaEdit, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MealContext } from "./MealContext";
import { motion } from "framer-motion";
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease-in;
`;

const Container = styled.div`
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
  .CardParent {
    width: 22rem;
    height: 27rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    text-align: center;
    border-radius: 2rem;
    overflow: hidden;
  }

  .cardBody {
    padding: 0;
  }
  .cardTitle {
    padding: 1rem 0.5rem 0rem;
  }
  .cardText {
    color: red;
    font-weight: bolder;
    font-size: larger;
    padding: 0.5rem  0 1rem;
  }
  @media (max-width: 440px) {
    .CardParent {
      width: 18rem;
      height: 24rem;
    }
    .cardTitle {
      font-size: medium;
    }
  }
  @media (max-width: 320px) {
    .CardParent {
      width: 16rem;
      height: 22rem;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 20rem;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 440px) {
    height: 18rem;
  }
  @media (max-width: 320px) {
    height: 16rem;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  margin: 0 14px;
  transition: all 0.5s ease;
  font-size: 1.3rem;

  &:hover {
    background-color: #e9f5f5;
  }
  .icon {
    display: grid;
    justify-items: center;
  }
  a {
    color: black;
  }
`;
const BaseTag = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
`;
const NewTag = styled(BaseTag)`
  background-color: rgb(255, 227, 17);
`;
const UpdateTag = styled(BaseTag)`
  background-color: #3c4a5b;
  color: #fff;
`;
const iconVariants = {
  hover: {
    boxShow: "0px 0px 20px rgb(255,255,255)",
    backgroundColor: "#53Cbf0",
    scale: 1.3,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 0.3
    }
  }
};
const Meal = ({ meal }) => {
  const { deleteMeal } = useContext(MealContext);
  return (
    <Container>
      <Card
        className="CardParent"
        as={motion.div}
        initial={{ opacity: 0, scale: 0.5, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {meal.isNew ? (
          <NewTag>NEW</NewTag>
        ) : (
          meal.isUpdate && <UpdateTag>UPDATED</UpdateTag>
        )}
        <Info>
          <Icon as={motion.div} variants={iconVariants} whileHover="hover">
            <Link to={`/mealDetails/${meal.strMeal}`} state={{ meal }}>
              <FaSearch className="icon" />
            </Link>
          </Icon>
          <Icon as={motion.div} variants={iconVariants} whileHover="hover">
            <Link to={`/editMeal/${meal.strMeal}`} state={{ meal }}>
              <FaEdit className="icon" />
            </Link>
          </Icon>
          <Icon as={motion.div} variants={iconVariants} whileHover="hover">
            <FaTimes
              className="icon"
              onClick={() => deleteMeal(meal.idMeal, meal.strMeal)}
            />
          </Icon>
        </Info>
        <ImageContainer>
          <Card.Img variant="top" src={meal.strMealThumb} />
        </ImageContainer>
        <Card.Body className="cardBody">
          <Card.Title className="cardTitle">{meal.strMeal}</Card.Title>
          <Card.Text className="cardText">$ {meal.price}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Meal;
