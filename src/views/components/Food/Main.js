import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PrivateRoute from "../../../routes/PrivateRoute";
import Checkout from "../Checkout/Checkout";
import CheckoutPage from "../Checkout/CheckoutPage";
import Banner from "../Home/Banner";
import FoodContainer from "./FoodContainer";
import SingleFood from "./SingleFood";

const Main = () => {
  const [foodData, setFoodData] = useState([]);
  const [food, setFood] = useState("breakfast");
  const [filteredFood, setFilteredFood] = useState({});
  const [showFoodContainer, setShowFoodContainer] = useState(true);
  const [showSingleFood, setShowSingleFood] = useState(false);
  const [showCheckOut, setShowCheckout] = useState(false);
  const [search, setSearh] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [checkoutProducts, setCheckoutProducts] = useState({});
  const [checkoutPage, setCheckoutPage] = useState(false);
  const [displayFoods, setDisplayFoods] = useState([]);

  useEffect(() => {
    fetch("https://glacial-tor-09174.herokuapp.com/foods")
      .then((res) => res.json())
      .then((data) => setFoodData(data));
  }, []);

  const hideAll = () => {
    setShowFoodContainer(false);
  };

  const checkout = (products) => {
    setCheckoutProducts(products);
    setShowSingleFood(false);
    setShowCheckout(true);
  };

  const getSingleFoodDetails = (id) => {
    const data = foodData?.find((food) => food._id === id);
    setFilteredFood(data);
    setShowSingleFood(true);
    hideAll();
  };

  return (
    <MainStyled>
      {!search && <Banner datas={foodData} setFoodData={setFoodData} />}
      <div className="nav">
        <Link
          onClick={() => {
            setCheckoutPage(false);
            setFood("breakfast");
            setShowSingleFood(false);
            setShowFoodContainer(true);
            setShowCheckout(false);
            setQuantity(1);
          }}
          to="/"
          className={food === "breakfast" ? "active" : ""}
        >
          Breakfast
        </Link>
        <Link
          onClick={() => {
            setCheckoutPage(false);
            setFood("lunch");
            setShowSingleFood(false);
            setShowFoodContainer(true);
            setShowCheckout(false);
            setQuantity(1);
          }}
          to="/"
          className={food === "lunch" ? "active" : ""}
        >
          Lunch
        </Link>
        <Link
          onClick={() => {
            setCheckoutPage(false);
            setFood("dinner");
            setShowSingleFood(false);
            setShowFoodContainer(true);
            setShowCheckout(false);
            setQuantity(1);
          }}
          to="/"
          className={food === "dinner" ? "active" : ""}
        >
          Dinner
        </Link>
      </div>

      {showFoodContainer && (
        <FoodContainer
          setShowFoodContainer={setShowFoodContainer}
          setCheckoutPage={setCheckoutPage}
          foodType={food}
          getSingleFoodDetails={getSingleFoodDetails}
        ></FoodContainer>
      )}

      {showCheckOut && (
        <Checkout
          checkoutProducts={checkoutProducts}
          quantity={quantity}
        ></Checkout>
      )}

      {checkoutPage && (
        <CheckoutPage setCheckoutPage={setCheckoutPage}></CheckoutPage>
      )}

      {showSingleFood && (
        <PrivateRoute>
          <SingleFood
            food={filteredFood}
            quantity={quantity}
            setQuantity={setQuantity}
            checkout={checkout}
          ></SingleFood>
        </PrivateRoute>
      )}
    </MainStyled>
  );
};

const MainStyled = styled.div`
  position: relative;
  top: 80px;
  /* z-index: -1; */
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      margin-top: 10px;
      padding: 0px 20px;
      &:hover {
        color: rgb(255, 0, 76);
        border-bottom: 2px solid rgb(255, 0, 76);
      }

      &.active {
        color: rgb(255, 0, 76);
        border-bottom: 2px solid rgb(255, 0, 76);
      }
    }
  }
`;

export default Main;
