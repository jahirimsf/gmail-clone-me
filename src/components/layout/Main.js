import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import EmailsView from "./EmailsView";
import MailView from "./MailView";
import SendMessageModal from "./SendMessageModal";
import Sidebar from "./Sidebar";
import SideIcons from "./SideIcons";

function Main() {
  return (
    <MainWrapper>
      <Sidebar />
      <Router>
        <Switch>
          <Route path="/">
            <EmailsView />
          </Route>
          <Route path="/mail/:mailId">
            <MailView />
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
  grid-template-columns: 256px auto 50px;
`;
