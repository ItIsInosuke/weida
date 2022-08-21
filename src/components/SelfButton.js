import React from "react";
import { ButtonWrapper } from "./SelftButton.style";
import { Carousel } from "antd";
import "antd/lib/carousel/style";
import "antd/dist/antd.min.css";


const SelftButton = () => (
  <ButtonWrapper>
    <Carousel
      dots={false}
      autoplay="true"
      effect="fade"
      style={{
        width: 250,
        height: 100,
        marginTop: 250,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 250,
      }}
    >
      <div>
        <a href="/portpage01">
          <img className="img" src="../../images/TB1.png"></img>
        </a>
      </div>
      <div>
        <a href="/portpage02">
          <img className="img" src="../../images/TB2.png"></img>
        </a>
      </div>
      <div>
        <a href="/portpage03">
          <img className="img" src="../../images/TB3.png"></img>
        </a>
      </div>
    </Carousel>
  </ButtonWrapper>
);

export default SelftButton;

