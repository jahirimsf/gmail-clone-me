import { Button, Card } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function Login({ signIn }) {
  return (
    <Wrapper>
      <Container>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
          alt=""
        />
        <h1>Singn in with Google account</h1>
        <Button onClick={signIn} variant="contained" color="primary">
          Sign in
        </Button>
      </Container>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f0e4d7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(Card)`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 30px 20px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  img {
    height: 150px;
  }
  h1 {
    padding: 20px 0;
  }
`;
