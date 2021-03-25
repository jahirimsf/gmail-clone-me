import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import SentMailView from "../sent/SentMailView";
import InboxMail from "../inbox/InboxMail";
import InboxMailView from "../inbox/InboxMailView";
import SentMail from "../sent/SentMail";
import SendMessageModal from "./SendMessageModal";
import Sidebar from "./Sidebar";
import SideIcons from "./SideIcons";
import StarredMail from "../starred/StarredMail";
import StarredMailView from "../starred/StarredMailView";

function Main({ sidebar, user }) {
  const [inboxlength, setinboxLength] = useState(0);
  const [sentlength, setSentLength] = useState(0);
  const [starlength, setStarLength] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const openSendMessage = () => {
    setOpenModal(true);
  };
  return (
    <MainWrapper sidebar={sidebar ? 1 : 0}>
      <Router>
        <Sidebar
          sentlength={sentlength}
          inboxlength={inboxlength}
          starlength={starlength}
          user={user}
          sidebar={sidebar}
          openSendMessage={openSendMessage}
        />
        <Switch>
          <Route path="/" exact>
            <InboxMail
              setinboxLength={setinboxLength}
              user={user}
              sidebar={sidebar}
            />
          </Route>
          <Route path="/star">
            <StarredMail
              setStarLength={setStarLength}
              user={user}
              sidebar={sidebar}
            />
          </Route>
          <Route path="/sent">
            <SentMail
              setSentLength={setSentLength}
              user={user}
              sidebar={sidebar}
            />
          </Route>

          <Route path="/inbox/:mailId">
            <InboxMailView sidebar={sidebar} />
          </Route>
          <Route path="/starred/:starId">
            <StarredMailView sidebar={sidebar} />
          </Route>
          <Route path="/sentView/:sentId">
            <SentMailView sidebar={sidebar} />
          </Route>
        </Switch>
      </Router>

      <SideIcons />
      {openModal && (
        <SendMessageModal user={user} setOpenModal={setOpenModal} />
      )}
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

  @media screen and (max-width: 1224px) {
    display: grid;
    grid-template-columns: ${({ sidebar }) =>
      sidebar ? "65px 1109px 50px" : "256px 918px 50px"};
  }

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: ${({ sidebar }) =>
      sidebar ? "65px 909px 50px" : "256px 718px 50px"};
  }
  @media screen and (max-width: 991px) {
    display: grid;
    grid-template-columns: ${({ sidebar }) =>
      sidebar ? "65px 876px 50px" : "256px 685px 50px"};
  }
  @media screen and (max-width: 667px) {
    display: grid;
    grid-template-columns: ${({ sidebar }) =>
      sidebar ? "65px 552px 50px" : "170px 447px 50px"};
  }
`;
