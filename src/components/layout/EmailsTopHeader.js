import React from "react";

import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import { Button, Checkbox, IconButton } from "@material-ui/core";
import styled from "styled-components";
import GroupButton from "../button/GroupButton";

function EmailsTopHeader() {
  return (
    <EmailsTopWrapper>
      <TopWrapperLeft>
        <GroupButton Icon={Checkbox} />
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </TopWrapperLeft>
      <TopWrapperRight>
        <PaginationButton>1-100 of 300</PaginationButton>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
        <GroupButton Icon={VerticalSplitIcon} split={true} />

        <GroupButton Icon={KeyboardIcon} split={true} />
      </TopWrapperRight>
    </EmailsTopWrapper>
  );
}

export default EmailsTopHeader;

const EmailsTopWrapper = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  padding: 2px 10px;
  border-bottom: 1px solid lightgray;
  .MuiSvgIcon-root {
    font-size: 20px;
  }
`;
const PaginationButton = styled(Button)`
  text-transform: lowercase !important;
`;

const TopWrapperLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const TopWrapperRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
