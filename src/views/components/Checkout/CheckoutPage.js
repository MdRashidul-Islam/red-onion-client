import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useAuth from "../../../hooks/useAuth";
import CheckoutFood from "./CheckoutFood";

const CheckoutPage = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`https://glacial-tor-09174.herokuapp.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  let total = 0;

  for (const fd of foods) {
    total = total + fd.price;
  }

  return (
    <CheckoutPageStyled>
      <div className="checkout">
        <div className="top">
          {foods?.length ? (
            foods.map((fd) => (
              <CheckoutFood key={fd.id} pd={fd} products={foods} />
            ))
          ) : (
            <p
              style={{
                textAlign: "center",
                fontSize: "30px",
                fontWeight: "bold",
                paddingTop: "10%",
              }}
            >
              No Food Ordered Yet
            </p>
          )}
        </div>

        <h2>
          Total : <span style={{ color: "#F91944" }}>{total}</span> tk
        </h2>
      </div>
    </CheckoutPageStyled>
  );
};

const CheckoutPageStyled = styled.div`
  .checkout {
    padding: 20px 90px;
    min-height: 90vh;
    h2 {
      margin-left: 150px;
      padding: 20px;
      @media (max-width: 700px) {
        margin-left: 0px;
      }
    }
  }
`;

export default CheckoutPage;
