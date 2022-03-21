import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Food = ({ food, getSingleFoodDetails }) => {
  const { _id, photo, title, subtitle, price } = food;

  return (
    <FoodStyled>
      <div className="food" onClick={() => getSingleFoodDetails(_id)}>
        <img src={photo} alt="" />
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <h4>Price: $ {price}</h4>
      </div>
    </FoodStyled>
  );
};

const FoodStyled = styled.div`
  padding: 20px 30px;
  .food {
    text-align: center;
    width: 300px;
    min-height: 350px;
    border-radius: 5px;
    padding: 10px;

    img {
      width: 200px;
      object-fit: contain;
    }
    &:hover {
      box-shadow: 0 5px 50px rgba(0, 0, 0, 0.15);
      transition: 0.4s ease-in-out;
    }
  }
`;

export default Food;
