import React from "react";
import styled from "styled-components";
import bg from "../../../assets/bannerbackground.png";

const background = {
  background: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  height: "620px",
  width: "100%",
};

const Banner = ({ datas }) => {
  // const [foodData] = useFoodData();
  // const handleSearch = (e) => {
  //   const searchText = e.target.value;
  //   const matchedProducts = foodData.filter((pd) =>
  //     pd.title.toLowerCase().includes(searchText.toLowerCase())
  //   );

  //   if (searchText) {
  //     setDisplayProducts(matchedProducts);
  //   } else {
  //     setDisplayProducts(products);
  //   }

  return (
    <BannerStyled style={background}>
      <div className="banner">
        <div className="content">
          <p>Best food waiting for your belly</p>
          <div className="text_field">
            <input type="text" placeholder="Search food items" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </BannerStyled>
  );
};

const BannerStyled = styled.div`
  .banner {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
    }
    .content {
      p {
        font-size: 50px;
        @media (max-width: 700px) {
          font-size: 30px;
          padding-left: 40px;
        }
      }
    }
    .text_field {
      width: 100%;
      display: flex;
      justify-content: center;
      height: 40px;
      position: relative;
      margin-top: 20px;
      @media (max-width: 700px) {
        margin-right: 40px;
      }
      input {
        border-radius: 30px;
        position: absolute;
        height: inherit;
        width: 80%;
        border: none;
        padding-left: 10px;
        font-size: 1rem;
      }
      button {
        position: absolute;
        height: 40px;
        left: 80%;
        border-radius: 30px;
        border: none;
        padding: 0 20px;
        background: #f91944;
        color: white;
        @media (max-width: 700px) {
          left: 70%;
        }
      }
    }
  }
`;

export default Banner;
