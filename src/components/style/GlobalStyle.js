import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
    background-color: white;
}

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1366px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 10px;
  padding-left: 10px;

  @media screen and (max-width: 991px) {
    padding-right: 10px;
    padding-left: 10px;
  }
  @media screen and (max-width: 667px) {
    padding-right: 5px;
    padding-left: 5px;
  }

  @media screen and (max-width: 480px) {
    padding-right: 3px;
    padding-left: 3px;
  }
`;

export default GlobalStyle;
