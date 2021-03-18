import { Avatar, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import Compose from "../button/Compose";
import AddIcon from "@material-ui/icons/Add";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useHistory } from "react-router-dom";
import SidebarButtonItems from "../button/SidebarButtonItems";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/Inbox";

function Sidebar() {
  const [active, setActive] = useState(false);

  const handleInbox = () => {
    setActive(true);
  };

  console.log("active", active);
  return (
    <SidebarWrapper>
      <TopSection>
        <ComposeWrapper>
          <Compose />
        </ComposeWrapper>
        <SideButtonWrapper>
          <SidebarButtonItems
            onClick={handleInbox}
            Icon={InboxIcon}
            title="Inbox"
            active={active}
            selected={true}
            number={156}
          />
          <SidebarButtonItems
            Icon={StarIcon}
            title="Starred"
            active={true}
            number={16}
            select={true}
          />
          <SidebarButtonItems
            Icon={WatchLaterIcon}
            title="Snoozed"
            number={56}
            active={true}
            select={true}
          />
          <SidebarButtonItems
            Icon={SendIcon}
            title="Sent"
            active={true}
            number={15}
            select={true}
          />
          <SidebarButtonItems
            Icon={DraftsIcon}
            title="Drafts"
            active={false}
            number={56}
          />
          <SidebarButtonItems Icon={ExpandMoreIcon} title="More" />
        </SideButtonWrapper>
      </TopSection>
      <BottomeSection>
        <MeetWrapper>
          <span></span>
          <Title>Meet</Title>
        </MeetWrapper>
        <HangoutsWrapper>
          <Title>Hangouts</Title>
          <HangoutsItem>
            <Avatar />
            <div>
              Jahir <ArrowDropDownIcon style={{ fontSize: "14" }} />
            </div>
            <IconButton size="small">
              <AddIcon />
            </IconButton>
          </HangoutsItem>
        </HangoutsWrapper>
        <BottomIconWrapper>
          <IconButton size="small"></IconButton>
        </BottomIconWrapper>
      </BottomeSection>
    </SidebarWrapper>
  );
}

export default Sidebar;

const SidebarWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: calc(100%-60px);
`;

const ComposeWrapper = styled.div`
  display: grid;
  place-items: start;
  padding: 10px 6px;
`;
const SideButtonWrapper = styled.div``;
const Title = styled.h6`
  padding: 5px 20px;
  font-size: 13px;
  color: #202124;
  font-weight: 500;
`;
const MeetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid lightgray;
  span {
    width: 30px;
    margin: 4px auto;
    align-self: center;
    height: 5px;
    background-color: white;
    border-radius: 50px;
  }
  :hover span {
    background-color: lightgray;
  }
`;
const HangoutsWrapper = styled.div`
  border-top: 1px solid lightgray;
  margin-top: 20px;
`;
const BottomIconWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 30px;
  .MuiSvgIcon-root {
    font-size: 18px;
  }
`;

const HangoutsItem = styled.div`
  display: grid;
  grid-template-columns: 18% auto min-content;
  padding-left: 20px;
  align-items: center;
  .MuiAvatar-root {
    height: 25px;
    width: 25px;
  }
`;
const TopSection = styled.div``;
const BottomeSection = styled.div``;
