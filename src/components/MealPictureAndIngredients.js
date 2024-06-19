import React from "react";
import { Form } from "react-bootstrap";
import ScrollableFeed from "react-scrollable-feed";
import { List, ListItem } from "./style/Forms.styled";
import { FaTrash, FaPlusSquare } from "react-icons/fa";
const MealPictureAndIngredients = ({
  mealPicturesFields,
  register,
  mealPicturesRemove,
  mealPicturesAppend,
  mealIngredientsFields,
  mealIngredientsRemove,
  mealIngredientsAppend
}) => {
  return (
    <>
      <Form.Group className="mb-3">
        <p>Meal Picture(s)</p>
        <div className="multipleControlsContainer">
          <List>
            <ScrollableFeed>
              {mealPicturesFields.map((mealPicture, index) => {
                return (
                  <ListItem key={mealPicture.id}>
                    <Form.Control
                      type="url"
                      placeholder="New Picture"
                      {...register(`mealPictures.${index}.mealPicture`, {
                        required: true
                      })}
                    />
                    <FaTrash
                      className="icon delete"
                      onClick={() => mealPicturesRemove(index)}
                    />
                  </ListItem>
                );
              })}
            </ScrollableFeed>
          </List>
          <FaPlusSquare
            className="icon append"
            onClick={() => mealPicturesAppend({ mealPicture: "" })}
          />
        </div>
      </Form.Group>

      <Form.Group>
        <p>Meal Ingredient(s)</p>
        <div className="multipleControlsContainer">
          <List>
            <ScrollableFeed>
              {mealIngredientsFields.map((mealIngredient, index) => {
                return (
                  <ListItem key={mealIngredient.id}>
                    <Form.Control
                      type="text"
                      placeholder="New ingredient"
                      {...register(`ingredients.${index}.ingredient`, {
                        required: true
                      })}
                    />
                    <FaTrash
                      className="icon delete"
                      onClick={() => mealIngredientsRemove(index)}
                    />
                  </ListItem>
                );
              })}
            </ScrollableFeed>
          </List>
          <FaPlusSquare
            className="icon append"
            onClick={() => mealIngredientsAppend({ ingredient: "" })}
          />
        </div>
      </Form.Group>
    </>
  );
};

export default MealPictureAndIngredients;
