import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Container, Left, Center, Right } from "./style/Forms.styled";
import { useForm, useFieldArray } from "react-hook-form";
import defaultMealImg from "../assets/defaultMealImg.jpg";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import { MealContext } from "./MealContext";
import MealForm from "./MealForm";
import MealPictureAndIngredients from "./MealPictureAndIngredients";
import MealFormCarousel from "./MealFormCarousel";

const EditMeal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateMeal } = useContext(MealContext);
  const { meal } = location.state;
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors }
  } = useForm({
    mode: "all",
    defaultValues: {
      strMeal: meal.strMeal,
      price: meal.price,
      strMealThumb: meal.strMealThumb,
      mealPictures: meal.mealPictures,
      ingredients: meal.ingredients
    }
  });

  const {
    fields: mealPicturesFields,
    remove: mealPicturesRemove,
    append: mealPicturesAppend
  } = useFieldArray({
    control,
    name: "mealPictures"
  });

  const {
    fields: mealIngredientsFields,
    remove: mealIngredientsRemove,
    append: mealIngredientsAppend
  } = useFieldArray({
    control,
    name: "ingredients"
  });

  const onsubmit = (data) => {
    let UpdatedMeal = {
      idMeal: meal.idMeal,
      isNew: false,
      isUpdate: true,
      ...data
    };
    updateMeal(UpdatedMeal);
    Swal.fire("Meal Updated", "SuccessFull", "success");
    navigate("/", { replace: true });
  };

  const imgThumb = watch("strMealThumb")
    ? watch("strMealThumb")
    : defaultMealImg;
  const mealPics = watch("mealPictures");
  const mealIngred = watch("ingredients");
  return (
    <>
      <Form onSubmit={handleSubmit(onsubmit)}>
        <Container>
          <Left>
            <h3 className="mb-3 ">Add New Meal</h3>
            <MealForm register={register} errors={errors} />
            <MealPictureAndIngredients
              mealPicturesFields={mealPicturesFields}
              mealPicturesRemove={mealPicturesRemove}
              mealPicturesAppend={mealPicturesAppend}
              register={register}
              mealIngredientsFields={mealIngredientsFields}
              mealIngredientsRemove={mealIngredientsRemove}
              mealIngredientsAppend={mealIngredientsAppend}
            />
          </Left>

          <Center>
            <h4>Ingredients (Preview)</h4>
            {mealIngred.length >= 1 && (
              <ul>
                {mealIngred.map((item, index) => {
                  return <li key={index}>{item.ingredient}</li>;
                })}
              </ul>
            )}
          </Center>

          <Right>
            <MealFormCarousel imgThumb={imgThumb} mealPics={mealPics} />
            <Button
              variant="primary"
              type="submit"
              style={{ border: "none", backgroundColor: "#53cbf0" }}
            >
              ADD
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => navigate("/", { replace: true })}
              className="mt-3"
            >
              Cancel
            </Button>
          </Right>
        </Container>
      </Form>
    </>
  );
};

export default EditMeal;
