import styled from "styled-components";

export const Container = styled.div`
  /* display: inline-block; */
  width: 3800px;
  height: 1800px;
  background-size: cover;
  background:url(../../images/WZ3.jpg);
  @media screen and (max-width: 1000px) {
    height: 2800px;
    width: 1000px;
    background: url(../../images/WZ.jpg);
    overflow: hidden;
  }
`;

export const Wrapper = styled.img`
  /* display: inline-block;
  width: 3800px;
  height: 1800px;
  background: url(../images/WZ3.png);
  overflow: hidden; */
  /* @media screen and (max-width: 1000px) {
    background-position: center;
  } */
`;
