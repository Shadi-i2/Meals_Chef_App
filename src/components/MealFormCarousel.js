import React from "react";
import {
  ThumpImageContainer,
  Wrapper,
  ImageContainer
} from "./style/Forms.styled";
import { Carousel } from "react-responsive-carousel";
const MealFormCarousel = ({ mealPics, imgThumb }) => {
  return (
    <>
      <ThumpImageContainer>
        <img src={imgThumb} alt="" />
      </ThumpImageContainer>
      {mealPics.length >= 1 && (
        <Wrapper>
          <Carousel
            showIndicators={true}
            showArrows={false}
            showThumbs={false}
            autoPlay
            infiniteLoop
          >
            {mealPics.map((singleMealPic, index) => {
              return (
                <ImageContainer key={index}>
                  <img src={singleMealPic.mealPicture} alt="" />
                </ImageContainer>
              );
            })}
          </Carousel>
        </Wrapper>
      )}
    </>
  );
};

export default MealFormCarousel;
