import React from "react";
import { Form } from "react-bootstrap";
const MealForm = ({ register, errors }) => {
  return (
    <>
      <Form.Group className="mb-3" controlId="mail-Name">
        <Form.Label>Mail Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Mail Name"
          {...register("strMeal", {
            required: "is required"
          })}
        />
        <span>{errors.strMeal?.message}</span>
      </Form.Group>

      <Form.Group className="mb-3" controlId="mail-Price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Mail Price"
          {...register("price", {
            required: "is required",
            min: {
              value: 1,
              message: "Minimum price is $1"
            }
          })}
        />
        <span>{errors.price?.message}</span>
      </Form.Group>

      <Form.Group className="mb-3" controlId="mail-Thumb">
        <Form.Label>Meal Thumb</Form.Label>
        <Form.Control
          type="url"
          placeholder="Enter Mail Thumb (URL)"
          {...register("strMealThumb", {
            required: "is required",
            pattern: {
              value: /(https?:\/\/.*\.(?:png|jpg|gif|jpeg))/,
              message: "Supported image urls are (jpg | png | gif)"
            }
          })}
        />
        <span>{errors.strMealThumb?.message}</span>
      </Form.Group>
    </>
  );
};

export default MealForm;
