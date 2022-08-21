import styled from "styled-components";

export const Wrapper = styled.div`
  float: left;
  width: 3800px;
  height: 880px;
  margin: 0;
  padding: 0;
  background-color: #000;
  @media screen and (max-width: 1000px) {
    height: 800px;
    width: 1000px;
    overflow: hidden;
  }
`;

export const ImgWrapper = styled.div`
  margin: 400px auto 0px;
  height: 50px;
  width: 50px;
  background-color: #ff0000;
  background: url(../images/TB5.png);

  .img {
    height: 50px;
    width: 50px;
  }
  @media screen and (max-width: 1000px) {
    height: 800px;
    width: 1000px;
    overflow: hidden;
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  width: fit-content;
  height: 50px;
  margin: 50px auto;
  font-family: "LHanoienne TypeFace";
  font-size: 18px;
  color: white;
  @media screen and (max-width: 1000px) {
    margin-top: 550px;
  }
`;
