import React from "react";
import styled from "styled-components";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import GlobalStyle from "./components/style/GlobalStyle";

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header />
      <Main />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div``;
