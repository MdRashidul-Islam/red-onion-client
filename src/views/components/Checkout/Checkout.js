import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Container } from "../../../styles/Layout";
import OrderedProducts from "./OrderedProducts";

const Checkout = ({ checkoutProducts, quantity }) => {
  const { user } = useAuth();
  const { _id, photo, price, title } = checkoutProducts;
  const newPrice = price * quantity;
  const { register, handleSubmit } = useForm();

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    data.price = newPrice;
    data.quantity = quantity;
    data.photo = photo;
    data.title = title;
    data.email = user.email;
    data.name = user.displayName;

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // setHide(true);
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure want to delete ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7cd7a6",
      cancelButtonColor: "#f63e7b",
      confirmButtonText: "DELETE",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5000/order/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingService = products.filter(
                (prod) => prod._id !== id
              );
              setProducts(remainingService);
              Swal.fire({
                icon: "success",
                title: "Delete successfully",
                showConfirmButton: false,
                timer: 900,
              });
            }
          });
      }
    });
  };

  const handlePlaceOrder = () => {
    // navigate("/checkout");
  };

  return (
    <Container>
      <CheckoutStyled>
        <div className="checkout">
          <div className="first">
            <h4>Edit Delivery Details</h4>
            <hr className="hr" />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <input
                disabled
                {...register("name")}
                placeholder="Name"
                defaultValue={user.displayName}
              />
              <input
                disabled
                {...register("email")}
                placeholder="email"
                defaultValue={user.email}
              />
              <input required {...register("road")} placeholder="Road no" />
              <input type="text" {...register("flat")} placeholder="Flat" />
              <input
                required
                type="number"
                {...register("phone")}
                placeholder="Phone"
              />
              <textarea
                type="text"
                {...register("instructor")}
                placeholder="Instruction"
              />
              <button>PlaceOrder</button>
            </form>
          </div>
          {/* {setHide === false ? "second" : "hide"} */}

          <div className="second">
            <h4>From Gulsan plaza Restaurant GPR</h4>
            <h6>Arriving in 20-30 min </h6>
            <h6>107 Rd No 8</h6>
            <div style={{ textAlign: "center" }}>
              <img src={photo} alt="" />
              <h4>{title}</h4>
              <h4>quantity: {quantity}</h4>
              <h4>Price: {newPrice}</h4>
            </div>
          </div>

          <div className="third">
            <h4 style={{ textAlign: "center", padding: "5px" }}>
              Your Recent order List: {products.length}
            </h4>
            <div className="recent_order">
              {products.map((pd) => (
                <OrderedProducts
                  key={pd._id}
                  pd={pd}
                  products={products}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
            {/* <button onClick={handlePlaceOrder} className="p_button">
              PlaceOrder
            </button> */}
          </div>
        </div>
      </CheckoutStyled>
    </Container>
  );
};

const CheckoutStyled = styled.div`
  height: 80vh;
  @media (max-width: 700px) {
    height: 100%;
  }
  .checkout {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100%;
    }
    .first {
      @media (max-width: 700px) {
        width: 100%;
        margin: 30px 0px;
      }
      h4 {
        margin-bottom: 20px;
      }
      .hr {
        width: 400px;
        margin-bottom: 20px;
        @media (max-width: 700px) {
          width: 100%;
          text-align: center;
        }
      }
      .form {
        display: flex;
        flex-direction: column;

        input,
        textarea {
          width: 400px;
          height: 40px;
          margin-top: 10px;
          border: none;
          background: #f5f5f5;
          @media (max-width: 700px) {
            width: 100%;
            padding: 0px 20px;
          }
        }
        button {
          width: 400px;
          height: 40px;
          margin-top: 10px;
          border: none;
          background: #f91944;
          color: white;
          border-radius: 2px;
          @media (max-width: 700px) {
            width: 100%;
          }
        }
      }
    }

    .second {
      border: 1px solid lightgray;
      padding: 10px;
      border-radius: 5px;
      img {
        width: 150px;
        object-fit: contain;
      }
      @media (max-width: 700px) {
        margin: 30px 0px;
      }
    }

    .third {
      border: 1px solid #f91944;
      padding: 5px;
      border-radius: 3px;
      height: 70vh;
      .recent_order {
        height: 60vh;
        overflow: scroll;
        overflow-x: hidden;
      }
      .p_button {
        width: 100%;
        background: #f91944;
        border: none;
        height: 40px;
        color: white;
      }
      @media (max-width: 700px) {
        width: 100%;
      }
    }
  }
`;

export default Checkout;
