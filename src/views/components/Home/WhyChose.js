import React from "react";
import styled from "styled-components";
import Bell from "../../../assets/icons/Group 1133.png";
import Bus from "../../../assets/icons/Group 204.png";
import Truck from "../../../assets/icons/Group 245.png";
import Chef1 from "../../../assets/img/adult-blur-blurred-background-687824.png";
import Chef3 from "../../../assets/img/architecture-building-city-2047397.png";
import Chef2 from "../../../assets/img/chef-cook-food-33614.png";

const WhyChose = () => {
  return (
    <WhyChoseStyled>
      <div className="why-chose">
        <h2>Why you chose us</h2>
        <p className="subtitle">
          We deliver food very fast compare to other food delivery servicec{" "}
          <br />
          in your area. Also we have the best chef's around the city.
        </p>
        <div className="service-container">
          <div className="service-container__service">
            <img src={Chef1} alt="background" />
            <div className="service-bottom">
              <img src={Bus} alt="bus" className="icon" />
              <div className="service-info">
                <p className="title">Fast Delivery</p>
                <p className="description">
                  We deliver food very fast compare to other food delivery
                  servicec in your area. Clients are very satisfied with our
                  delivery service.
                </p>
                <p className="link">See more →</p>
              </div>
            </div>
          </div>
          <div className="service-container__service">
            <img src={Chef2} alt="background" />
            <div className="service-bottom">
              <img src={Bell} alt="bus" className="icon" />
              <div className="service-info">
                <p className="title">A Good Auto Responder</p>
                <p className="description">
                  You can directly contact with us 24/7. We always try to
                  respond to your messages as early as possible.
                </p>
                <p className="link">
                  See more <span className="icon"> → </span>
                </p>
              </div>
            </div>
          </div>
          <div className="service-container__service">
            <img src={Chef3} alt="background" />
            <div className="service-bottom">
              <img src={Truck} alt="bus" className="icon" />
              <div className="service-info">
                <p className="title">Home Delivery</p>
                <p className="description">
                  Our home delivery service is best. Our riders are very
                  professional and work with responsibility. You will surely be
                  satisfied.
                </p>
                <p className="link">
                  See more <span className="icon"> → </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WhyChoseStyled>
  );
};

const WhyChoseStyled = styled.div`
  margin-top: 60px;
  min-height: 600px;
  overflow: hidden;
  @media (max-width: 700px) {
    margin-top: 100px;
  }
  .why-chose {
    width: 90%;
    margin: 0 auto;

    & h2 {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    & .subtitle {
      margin-bottom: 30px;
    }

    & .service-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      @media (max-width: 700px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
      }
      &__service {
        display: flex;
        flex-direction: column;

        & > img {
          width: 100%;
          margin-bottom: 25px;
        }

        & .service-bottom {
          display: flex;
          padding: 20px;

          & .icon {
            width: 40px;
            height: 40px;
            margin-right: 20px;
          }

          & .service-info {
            & .title {
              font-weight: 500;
              margin-bottom: 20px;
            }

            & .description {
              font-size: 14px;
              margin-bottom: 10px;
              text-align: justify;
            }

            & .link {
              color: rgb(0, 60, 255);
              font-size: 14px;
              font-weight: 500;
              cursor: pointer;

              & .icon {
                display: inline-block;
                width: 28px;
                height: 28px;
                border-radius: 50%;
                background-color: #f91944;
                color: white;
                font-size: 18px;
                text-align: center;
                margin-left: 10px;
              }
            }
          }
        }
      }
    }
  }
`;

export default WhyChose;
