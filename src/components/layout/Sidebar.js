import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Compose from "../button/Compose";
import AddIcon from "@material-ui/icons/Add";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SidebarButtonItems from "../button/SidebarButtonItems";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/Inbox";
import VideocamIcon from "@material-ui/icons/Videocam";
import KeyboardIcon from "@material-ui/icons/Keyboard";

import PersonIcon from "@material-ui/icons/Person";
import CallIcon from "@material-ui/icons/Call";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";

function Sidebar({
  sidebar,
  user,
  inboxlength,
  sentlength,
  starlength,
  openSendMessage,
}) {
  return (
    <>
      {sidebar ? (
        <SidebarWrapper>
          <TopSection>
            <ComposeWrapper>
              <Compose openSendMessage={openSendMessage} sidebar={sidebar} />
            </ComposeWrapper>
            <SideButtonWrapper>
              <SidebarButtonItems
                inbox
                number={inboxlength}
                sidebar
                Icon={InboxIcon}
              />

              <SidebarButtonItems
                star
                number={starlength}
                sidebar
                Icon={StarIcon}
              />
              <SidebarButtonItems number={5} sidebar Icon={WatchLaterIcon} />

              <SidebarButtonItems
                sent
                number={sentlength}
                sidebar
                Icon={SendIcon}
              />

              <SidebarButtonItems number={0} sidebar Icon={DraftsIcon} />
              <SidebarButtonItems Icon={ExpandMoreIcon} />
            </SideButtonWrapper>
          </TopSection>
          <BottomeSection>
            <MeetWrapper>
              <Title>
                <VideocamOutlinedIcon style={{ fontSize: "18px" }} />
              </Title>
              <SidebarButtonItems Icon={VideocamIcon} />
              <SidebarButtonItems Icon={KeyboardIcon} />
            </MeetWrapper>

            <HangoutsWrapper>
              <HangoutsItem>
                <ButtonWrapper>
                  <FormatQuoteIcon />
                </ButtonWrapper>
              </HangoutsItem>
              <HangoutsItem>
                <Avatar src={user?.userPhoto} />
              </HangoutsItem>
            </HangoutsWrapper>
            <BottomIconWrapper>
              <IconButton size="small">
                <PersonIcon />
              </IconButton>
              <IconButton size="small">
                <FormatQuoteIcon />
              </IconButton>
              <IconButton size="small">
                <CallIcon />
              </IconButton>
            </BottomIconWrapper>
          </BottomeSection>
        </SidebarWrapper>
      ) : (
        <SidebarWrapper>
          <TopSection>
            <ComposeWrapper>
              <Compose openSendMessage={openSendMessage} />
            </ComposeWrapper>

            <SideButtonWrapper>
              <SidebarButtonItems
                inbox
                Icon={InboxIcon}
                title="Inbox"
                number={inboxlength}
              />

              <SidebarButtonItems
                star
                Icon={StarIcon}
                title="Starred"
                number={starlength}
              />
              <SidebarButtonItems
                Icon={WatchLaterIcon}
                title="Snoozed"
                number={56}
              />

              <SidebarButtonItems
                sent
                Icon={SendIcon}
                title="Sent"
                number={sentlength}
              />

              <SidebarButtonItems
                Icon={DraftsIcon}
                title="Drafts"
                number={56}
              />
              <SidebarButtonItems Icon={ExpandMoreIcon} title="More" />
            </SideButtonWrapper>
          </TopSection>
          <BottomeSection>
            <MeetWrapper>
              <span></span>
              <Title>Meet</Title>
              <SidebarButtonItems Icon={VideocamIcon} title="New meeting" />
              <SidebarButtonItems Icon={KeyboardIcon} title="Join a meeting" />
            </MeetWrapper>

            <HangoutsWrapper>
              <Title>Hangouts</Title>

              <HangoutsItem>
                <Avatar src={user?.userPhoto} />

                <div>
                  Jahir <ArrowDropDownIcon style={{ fontSize: "14" }} />
                </div>
                <IconButton size="small">
                  <AddIcon />
                </IconButton>
              </HangoutsItem>
            </HangoutsWrapper>

            <BottomIconWrapper>
              <IconButton size="small">
                <PersonIcon />
              </IconButton>
              <IconButton size="small">
                <FormatQuoteIcon />
              </IconButton>
              <IconButton size="small">
                <CallIcon />
              </IconButton>
            </BottomIconWrapper>
          </BottomeSection>
        </SidebarWrapper>
      )}
    </>
  );
}

export default Sidebar;

const SidebarWrapper = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  top: 0;
`;

const ComposeWrapper = styled.div`
  display: grid;
  place-items: start;
  padding: 10px 6px;
`;
const SideButtonWrapper = styled.div`
  padding-top: 5px;
  padding-bottom: auto;
`;
const Title = styled.h6`
  padding: 5px 20px;
  font-size: 13px;
  color: #202124;
  font-weight: 500;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: gray;
  width: 20px;
  height: 20px;
  margin: 10px 0;
  border-radius: 50%;
  .MuiSvgIcon-root {
    font-size: 15px;
    color: white;
  }
`;
const MeetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgb(100 121 143 / 12%);
  /*  box-shadow: inset 0 -1px 0 0 rgb(100 121 143 / 12%); */
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
  border-top: 1px solid rgb(100 121 143 / 12%);
  /* border-top: 1px solid rgb(100 121 143 / 12%); */
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
const TopSection = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  box-shadow: inset 0 -1px 0 0 rgb(100 121 143 / 12%);
`;
const BottomeSection = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
