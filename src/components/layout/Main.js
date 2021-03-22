import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import InboxMail from "../inbox/InboxMail";
import InboxMailView from "../inbox/InboxMailView";
import SendMessageModal from "./SendMessageModal";
import Sidebar from "./Sidebar";
import SideIcons from "./SideIcons";

function Main({ sidebar, user }) {
  return (
    <MainWrapper sidebar={sidebar ? 1 : 0}>
      <Sidebar user={user} sidebar={sidebar} />
      <Router>
        <Switch>
          <Route path="/" exact>
            <InboxMail user={user} sidebar={sidebar} />
          </Route>
          <Route path="/inbox/:mailId">
            <InboxMailView sidebar={sidebar} />
          </Route>
        </Switch>
      </Router>

      <SideIcons />

      <SendMessageModal />
    </MainWrapper>
  );
}

export default Main;

const MainWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: ${({ sidebar }) =>
    sidebar ? "65px auto 50px" : "256px auto 50px"};
  /* transition: all 500ms ease-out 3s; */
`;
