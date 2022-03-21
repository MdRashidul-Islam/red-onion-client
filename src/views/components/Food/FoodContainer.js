import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useFoodData from "../../../hooks/useFoodData";
import Food from "./Food";

const FoodContainer = ({
  foodType,
  getSingleFoodDetails,
  setCheckoutPage,
  setShowFoodContainer,
}) => {
  const [filteredFoods, setFilteredFoods] = useState();
  const [foods, setFoods] = useFoodData();

  useEffect(() => {
    if (foodType === "breakfast") {
      const breakfast = foods?.filter((food) => food.category === "breakfast");

      setFilteredFoods(breakfast);
    } else if (foodType === "lunch") {
      const lunch = foods?.filter((food) => food.category === "lunch");
      setFilteredFoods(lunch);
    } else if (foodType === "dinner") {
      const dinner = foods?.filter((food) => food.category === "dinner");
      setFilteredFoods(dinner);
    } else {
      setFilteredFoods(foods?.breakfast);
    }
  }, [foodType, foods]);

  return (
    <FoodContainerStyled>
      <div className="food_container">
        <div className="food_section">
          {filteredFoods &&
            filteredFoods.map((food) => (
              <Food
                key={food.id}
                food={food}
                getSingleFoodDetails={getSingleFoodDetails}
              />
            ))}
        </div>
        <br />
        <div className="checkout">
          <button
            onClick={() => {
              setCheckoutPage(true);
              setShowFoodContainer(false);
            }}
            className="checkout-btn"
          >
            Checkout Your Food
          </button>
        </div>
      </div>
    </FoodContainerStyled>
  );
};

const FoodContainerStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .food_section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 700px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .checkout {
    text-align: center;
    button {
      background: #f91944;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      color: white;
    }
  }
`;

export default FoodContainer;
