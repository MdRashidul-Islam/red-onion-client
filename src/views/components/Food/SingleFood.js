import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import useFoodData from "../../../hooks/useFoodData";
import { Container } from "../../../styles/Layout";

const SingleFood = ({ food, quantity, setQuantity, checkout }) => {
  const { _id, title, subtitle, photo, price } = food;

  const [updatePrice, setUpdatePrice] = useState(price);
  const [image, setImage] = useState(photo);

  const [foodData] = useFoodData();

  const findFood = foodData?.filter((fd) => fd._id !== _id);

  const objectFood = findFood?.sort(() => 0.5 - Math.random());

  const handleMinus = () => {
    const currentQuantity = quantity - 1;
    if (currentQuantity >= 1) {
      setQuantity(currentQuantity);
    } else {
      return;
    }

    const price2 = updatePrice - price;
    setUpdatePrice(price2);
  };
  const handlePlus = () => {
    const currentQuantity = quantity + 1;
    setQuantity(currentQuantity);
    const price2 = price * currentQuantity;
    setUpdatePrice(price2);
  };

  return (
    <Container>
      <SingleFoodStyled>
        <div className="container">
          <div className="left">
            <div className="typography">
              <h1>{title}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                nisi quaerat eos odit accusamus, voluptatibus laboriosam
                deserunt nobis reprehenderit repudiandae beatae explicabo ullam
                quidem blanditiis soluta pariatur nulla vel quam.
              </p>

              <div className="calculation">
                <div>
                  <h1>$ {updatePrice}</h1>
                </div>
                <div className="plus_minus">
                  <button onClick={handleMinus}>-</button>
                  <span> {quantity}</span>{" "}
                  <button onClick={handlePlus}>+</button>
                </div>
              </div>
              <button onClick={() => checkout(food)} className="add_btn">
                <span>
                  <FaShoppingCart />
                </span>
                Add
              </button>
              <div className="related_img">
                {objectFood?.slice(4, 7)?.map((fd) => (
                  <div className="" key={fd._id}>
                    <img width="100px" src={fd.photo} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="right">
            <img src={photo} alt="" />
          </div>
        </div>
      </SingleFoodStyled>
    </Container>
  );
};

const SingleFoodStyled = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: justify;
    @media (max-width: 700px) {
      width: 100%;
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
    .left {
      padding-right: 20px;
      .calculation {
        margin-top: 30px;

        height: 30px;
        width: 250px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .plus_minus {
          border: 1px solid gray;

          border-radius: 20px;
          &:hover {
            border: 1px solid #f91944;
            transition: 0.3s;
          }
          button {
            border: none;
            background: none;
            font-size: 20px;
            margin: 0 10px;
            padding: 8px 16px;
            &:hover {
              color: #f91944;
              transition: 0.3s;
            }
          }
        }
      }
      .add_btn {
        padding: 10px 25px;
        border: none;
        border-radius: 20px;
        color: white;
        background: #f91944;
        margin-top: 20px;
        span {
          padding-right: 10px;
        }
      }
      .related_img {
        display: flex;
        padding: 20px;
      }

      @media (max-width: 700px) {
        width: 100%;
        padding-right: 0px;
        .calculation {
          margin-top: 30px;

          height: 30px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .related_img {
          display: flex;
          width: 100%;
          justify-content: space-evenly;
          padding: 20px 0px;
        }
      }
    }
    //right_section
    .right {
      img {
        width: 500px;
        object-fit: contain;
        @media (max-width: 700px) {
          width: 100%;
          margin: 30px 0px;
        }
      }
    }
  }
`;

export default SingleFood;
