import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import GlobalStyle from "./components/style/GlobalStyle";
import { auth, provider } from "./firebase";
import Login from "./Login";

function App() {
  const [sidebar, setSidebar] = useState(true);

  const defaultUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(defaultUser);
  const handleSidebar = (e) => {
    console.log(e);
    setSidebar(!sidebar);
  };

  const signIn = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
      let newUser = {
        userId: user.uid,
        userName: user.displayName,
        userEmail: user.email,
        userPhoto: user.photoURL,
      };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
    });
  };
  const signOut = () => {
    auth.signOut();
    setUser("");
  };
  useEffect(() => {}, []);
  return (
    <AppWrapper>
      {!user ? (
        <Login signIn={signIn} />
      ) : (
        <>
          <GlobalStyle />
          <Header signOut={signOut} user={user} handleSidebar={handleSidebar} />
          <Main user={user} sidebar={sidebar} />
        </>
      )}
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div``;
