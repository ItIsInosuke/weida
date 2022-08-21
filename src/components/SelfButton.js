import React from "react";
import { ButtonWrapper } from "./SelftButton.style";
import { Carousel } from "antd";
import "antd/lib/carousel/style";
import "antd/dist/antd.min.css";
import BtnImg01 from "../../src/images/TB1.png"
import BtnImg02 from "../../src/images/TB2.png"
import BtnImg03 from "../../src/images/TB3.png"

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
        <a href="/weida/portpage01">
          <img className="img" src={BtnImg01}></img>
        </a>
      </div>
      <div>
        <a href="/weida/portpage02">
          <img className="img" src={BtnImg02}></img>
        </a>
      </div>
      <div>
        <a href="/weida/portpage03">
          <img className="img" src={BtnImg03}></img>
        </a>
      </div>
    </Carousel>
  </ButtonWrapper>
);

export default SelftButton;

