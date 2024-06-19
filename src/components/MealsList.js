import React, { useContext } from "react";
import styled from "styled-components";
import Meal from "./Meal";
import { MealContext } from "./MealContext";
import { motion } from "framer-motion";

const Container = styled.div`
  padding: 2rem;
  display: grid;
  place-items: center;
  @media(max-width:440px){
    padding: 0.9rem;
  }
`;

const Title = styled.h3`
  text-align: left;
  margin-bottom: 2rem;
  color: rgb(44, 46, 46);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 3.5rem 2rem;
  @media(max-width:440px){
    gap: 1rem;
  }
`;
const MealsList = () => {
  const { allMeals } = useContext(MealContext);
  const allMealsList = allMeals.map((meal) => (
    <Meal key={meal.idMeal} meal={meal} />
  ));
  return (
    <Container>
      <Title
        as={motion.h3}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1, duration: 1 }}
      >
        Suggested For You
      </Title>
      <Wrapper>{allMealsList}</Wrapper>
    </Container>
  );
};

export default MealsList;
