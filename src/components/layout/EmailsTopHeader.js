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
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

function EmailsTopHeader() {
  return (
    <EmailsTopWrapper>
      <TopWrapperLeft>
        <GroupButton Icon={Checkbox} />
        <Tooltip TransitionComponent={Zoom} title="Refresh" placement="bottom">
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} title="More" placement="bottom">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
      </TopWrapperLeft>
      <TopWrapperRight>
        <PaginationButton>1-100 of 300</PaginationButton>
        <Tooltip TransitionComponent={Zoom} title="Newer" placement="bottom">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
        </Tooltip>

        <Tooltip TransitionComponent={Zoom} title="Older" placement="bottom">
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </Tooltip>
        <GroupButton Icon={VerticalSplitIcon} split={true} />

        <GroupButton Icon={KeyboardIcon} split={true} />
      </TopWrapperRight>
    </EmailsTopWrapper>
  );
}

export default EmailsTopHeader;

const EmailsTopWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  padding: 2px 10px;
  box-shadow: inset 0 -1px 0 0 rgb(100 121 143 / 12%);
  .MuiSvgIcon-root {
    font-size: 20px;
  }
`;
const PaginationButton = styled(Button)`
  text-transform: lowercase !important;
  @media screen and (max-width: 667px) {
    display: none !important;
  }
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
