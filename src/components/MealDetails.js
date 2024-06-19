import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import React, { useContext } from "react";
import { MealContext } from "./MealContext";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  .carousel .thumbs-wrapper {
    overflow-x: auto;
  }
  .carousel .thumbs-wrapper ul li {
    height: 80px;
  }
  .carousel .thumbs-wrapper ul li img {
    height: 100%;
  }
  @media (max-width: 568px) {
    padding: 1rem;
    gap: 1.3rem;
  }
`;
const Wrapper = styled.div`
  flex: 1;
  width: 50%;
  min-width: 27.3rem;
  max-width: 55rem;
  @media (max-width: 468px) {
    min-width: 100%;
  }
  .parent-carousel,
  .content-Ingredients {
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .content-Ingredients {
    height: 32rem;
  }
  .parent-carousel {
    height: 37rem;
  }
  h6 {
    color: gray;
  }
  .headWrapper {
    padding: 0 1rem;
  }
  h5 {
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
  }
  .buttonOrder {
    height: 3.2rem;
    font-weight: bolder;
    width: 100%;
    margin-top: 1rem;
  }
`;

const ImageContainer = styled.div`
  height: 27.5rem;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;
const IngredientsContainer = styled.div`
  overflow-y: auto;
  padding: 0 1rem;
  margin-bottom: 1rem;
  line-height: 2.5;
  ul {
    height: 26rem;
  }
`;
const MealDetails = () => {
  const location = useLocation();
  const { meal } = location.state;
  const { handleOrderClick } = useContext(MealContext);
  return (
    <Container>
      <Wrapper
        as={motion.div}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="parent-carousel">
          {meal.mealPictures && meal.mealPictures.length >= 1 ? (
            <Carousel
              className="carousel"
              showIndicators={false}
              autoPlay
              infiniteLoop
            >
              {meal.mealPictures.map((singleMealPicture, index) => {
                return (
                  <ImageContainer key={index}>
                    <img src={singleMealPicture.mealPicture} alt="" />
                  </ImageContainer>
                );
              })}
            </Carousel>
          ) : (
            <h5>No Pictures Provided for this meal</h5>
          )}
        </div>
      </Wrapper>
      <Wrapper
        as={motion.div}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <div className="content-Ingredients">
            <div className="headWrapper">
              <h3>Ingredients</h3>
              <h6>{meal.strMeal}</h6>
            </div>
            <IngredientsContainer id="IngredientsContainer">
              <ul>
                {meal.ingredients &&
                  meal.ingredients.map((singleIngredient, index) => (
                    <li key={index}>{singleIngredient.ingredient}</li>
                  ))}
              </ul>
            </IngredientsContainer>
          </div>
          <Button
            variant="warning"
            className="buttonOrder"
            onClick={() => handleOrderClick(meal.price)}
          >
            Order Now ${meal.price}
          </Button>
        </div>
      </Wrapper>
    </Container>
  );
};

export default MealDetails;
