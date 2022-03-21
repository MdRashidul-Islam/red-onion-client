import React from "react";
import styled from "styled-components";

const CheckoutFood = ({ pd, products }) => {
  const {
    title,
    price,
    photo,
    quantity,
    road,
    flat,
    phone,
    instructor,
    email,
    name,
  } = pd;
  return (
    <CheckoutProductStyled>
      <div className="checkout_product">
        <div className="food_info">
          <div className="left">
            <img src={photo} alt="" />
          </div>
          <div className="right">
            <h4>{title}</h4>
            <h4>Price: {price} tk</h4>
            <h4>Quantity: {quantity}</h4>
          </div>
        </div>
        <div className="address_info">
          <h3>Delivery Address</h3>
          <h5>name: {name}</h5>
          <h5>Email: {email}</h5>
          <h5>Road No: {road}</h5>
          <h5>Flat/Shop: {flat}</h5>
          <h5>Phone: {phone}</h5>
          <h5>Instruction: {instructor}</h5>
        </div>
      </div>
    </CheckoutProductStyled>
  );
};

const CheckoutProductStyled = styled.div`
  overflow: hidden;
  .checkout_product {
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    align-items: center;
    @media (max-width: 700px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 60vh;
      text-align: center;
    }
    .food_info {
      width: 50%;
      display: flex;
      align-items: center;
      @media (max-width: 700px) {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      .left {
        img {
          width: 150px;
          object-fit: contain;
          @media (max-width: 700px) {
            width: 200px;
          }
        }
      }
      .right {
        margin-left: 40px;
        @media (max-width: 700px) {
          margin-left: 0px;
        }
      }
    }
  }
`;

export default CheckoutFood;
