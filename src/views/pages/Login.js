import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo2.png";
import bg from "../../assets/bannerbackground.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const background = {
  background: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  minHeight: "100vh",
  width: "100%",
};

const Login = () => {
  const { signWithEmail, googleSignIn } = useAuth();
  const [loginData, setLoginData] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleSignIn(location, navigate);
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLogin = (e) => {
    signWithEmail(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };
  return (
    <LoginStyled style={background}>
      <div className="login">
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
        <div className="form">
          <form onSubmit={handleLogin}>
            <input
              name="email"
              onBlur={handleOnBlur}
              type="email"
              placeholder="Email"
            />
            <input
              name="password"
              onBlur={handleOnBlur}
              type="password"
              placeholder="Password"
            />
            <button type="submit">Login</button>
          </form>
          <Link to="/register">New in red-onion? Please register.</Link>
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
          font-size: 1.1rem;
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
      margin-left: 40%;
      color: blue;
    }
  }
`;

export default Login;
