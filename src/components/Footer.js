import React from "react";
import { Wrapper, ImgWrapper, ContentWrapper } from "./Footer.style";
import Logo from "../images/logo.png";
const Footer = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <a href="/weida/pictures">
          <img className="img" src={Logo} />
        </a>
      </ImgWrapper>
      <ContentWrapper>TH&nbsp;KANS&nbsp;&nbsp;TO&nbsp;&nbsp;KWL</ContentWrapper>
    </Wrapper>
  );
};

export default Footer;
