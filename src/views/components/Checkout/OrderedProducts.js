import React from "react";
import styled from "styled-components";

const OrderedProducts = ({ pd, handleDelete, products }) => {
  // const total = products.reduce((previous, product) => previous + pd.price, 0);

  return (
    <OrderedProductStyled>
      <div className="ordered_product" key={pd._id}>
        <div className="img">
          <img src={pd?.photo} alt="" />
        </div>
        <div className="info">
          <h6>{pd?.title}</h6>
          <h6>Price: {pd?.price}</h6>
          <h6>Quantity: {pd?.quantity}</h6>
        </div>
        <div className="delete">
          <button onClick={() => handleDelete(pd._id)}>X</button>
        </div>
      </div>
    </OrderedProductStyled>
  );
};

const OrderedProductStyled = styled.div`
  .ordered_product {
    margin: 2px 2px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgray;
    padding: 20px 10px;
    border-radius: 5px;

    &:hover {
      border: 1px solid #f91944;
      transition: 0.3s ease-in-out;
    }

    img {
      width: 70px;
      object-fit: contain;
      padding: 10px;
    }

    .delete {
      margin-left: 20px;
      button {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        border: none;

        background: #f91944;
        color: white;
      }
    }
  }
`;

export default OrderedProducts;
