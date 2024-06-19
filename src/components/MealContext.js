import React, { createContext, useState } from "react";
import Swal from "sweetalert2";
import { meals } from "../mealsData";

export const MealContext = createContext();
export const MealProvider = (props) => {
  const [allMeals, setAllMeals] = useState(meals);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleOrderClick = (price) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + parseInt(price));
    setTotalOrders((prevTotalOrders) => prevTotalOrders + 1);
  };

  const addNewMeal = (newMeal) => {
    setAllMeals([newMeal, ...allMeals]);
  };
  const updateMeal = (updatEDMeal) => {
    const filterMeals = allMeals.filter(
      (ele) => ele.idMeal !== updatEDMeal.idMeal
    );
    setAllMeals([updatEDMeal, ...filterMeals]);
  };
  const deleteMeal = (id, mealTitle) => {
    Swal.fire({
      title: "Want to Delete ?!",
      text: mealTitle,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const filterMeals = allMeals.filter((ele) => ele.idMeal !== id);
        setAllMeals(filterMeals);
        Swal.fire({
          title: "Deleted!",
          text: `${mealTitle} meal has been deleted`,
          icon: "success"
        });
      }
    });
  };
  return (
    <MealContext.Provider
      value={{
        allMeals,
        totalOrders,
        totalPrice,
        handleOrderClick,
        addNewMeal,
        updateMeal,
        deleteMeal
      }}
    >
      {props.children}
    </MealContext.Provider>
  );
};
