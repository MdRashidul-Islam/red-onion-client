import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo2.png";
import bg from "../../assets/bannerbackground.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const background = {
  background: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  minHeight: "100vh",
  width: "100%",
};

const Register = () => {
  const { registerUser, isLoading } = useAuth();

  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
      Swal.fire("Opps!", "Your Password did not match!", "error");
      return;
    }

    registerUser(loginData.name, loginData.email, loginData.password, navigate);
  };

  return (
    <LoginStyled style={background}>
      <div className="login">
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
        <div className="form">
          <form onSubmit={handleRegister}>
            <input
              onBlur={handleOnBlur}
              name="name"
              type="text"
              placeholder="Name"
            />
            <input
              onBlur={handleOnBlur}
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              onBlur={handleOnBlur}
              name="password"
              type="password"
              placeholder="Password"
            />
            <input
              onBlur={handleOnBlur}
              type="password"
              name="password2"
              placeholder="Retype-Password"
            />
            <button type="submit">Register</button>
          </form>
          <Link to="/login">Already have an account? please login.</Link>
        </div>
      </div>
    </LoginStyled>
  );
};

const LoginStyled = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  .login {
    img {
      display: block;
      width: 150px;
      object-fit: contain;
      margin: 40px auto;
    }
    .form {
      width: 350px;
      form {
        display: flex;
        flex-direction: column;
        input {
          height: 40px;
          width: 100%;
          margin-bottom: 10px;
          border: none;
          font-size: 1rem;
          padding-left: 4px;
          font-family: Poppins;
        }
        button {
          height: 40px;
          background-color: #f91944;
          color: white;
          border: none;
        }
      }
    }
    a {
      font-size: 12px;
      margin-left: 26%;
      color: blue;
    }
  }
`;

export default Register;
