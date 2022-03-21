import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer">
        <div className="first">
          <img src={logo} alt="" />
        </div>
        <div className="second">
          <h6>About Online food</h6>
          <h6>Read Our blog</h6>
          <h6>Sign up to deliver</h6>
          <h6>Add Your restaurant</h6>
        </div>
        <div className="third">
          <h6>Get help</h6>
          <h6>Read FAQs</h6>
          <h6>View all cities</h6>
          <h6>Restaurants near me</h6>
        </div>
      </div>
      <div className="bottom">
        <h6>Copyright@ 2022 Online food</h6>

        <h6>Privacy Policy</h6>

        <h6>Terms of Use</h6>

        <h6>Pricing</h6>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  height: 50vh;
  background: #191919;
  color: white;
  line-height: 20px;

  .footer {
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding-top: 20px;
    }
    .first {
      flex: 0.5;
      img {
        width: 150px;
        object-fit: contain;
      }
    }
  }
  .bottom {
    padding: 0px 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    @media (max-width: 700px) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 60px;
    }
  }
`;

export default Footer;
