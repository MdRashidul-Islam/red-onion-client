import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../assets/logo2.png";
import useAuth from "../../../hooks/useAuth";

import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const Navigation = () => {
  const { user, logOut } = useAuth();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [foods]);

  return (
    <NavigationStyled>
      <div className="navigation">
        <div className="left">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="right">
          <div className="auth_info">
            <span>Hello,</span>
            <span>{user?.displayName ? user.displayName : "Guest"}</span>
          </div>
          <Link to="/shoppingCart">
            <Badge badgeContent={foods.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </Link>

          <Link to={!user.email && "/login"}>
            <button onClick={user.email && logOut}>
              {user.email ? "Log Out" : "Login"}
            </button>
          </Link>
        </div>
      </div>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  .navigation {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    box-shadow: 0 5px 50px rgba(0, 0, 0, 0.15);
    position: fixed;
    z-index: 100;
    .left {
      img {
        width: 150px;
        padding-left: 20px;
        object-fit: contain;
        margin-left: 20px;
        @media (max-width: 700px) {
          width: 100px;
          padding-left: 20px;
        }
      }
    }
    .right {
      width: 280px;
      height: 80px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      a {
        button {
          padding: 8px 20px;
          border-radius: 20px;
          border: none;
          color: white;
          background: #f91944;
          font-family: Poppins;
        }
      }
      .auth_info {
        display: flex;
        flex-direction: column;
        font-size: 12px;
      }
    }
  }
`;

export default Navigation;
