import React from "react";
import { Wrapper, ImgWrapper, ContentWrapper } from "./Footer.style";

const Footer = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <a href="/pictures">
          <img className="img" src="../../images/logo.png" />
        </a>
      </ImgWrapper>
      <ContentWrapper>TH&nbsp;KANS&nbsp;&nbsp;TO&nbsp;&nbsp;KWL</ContentWrapper>
    </Wrapper>
  );
};

export default Footer;
