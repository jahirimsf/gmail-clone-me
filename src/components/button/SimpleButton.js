import React from "react";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

function SimpleButton() {
  return (
    <Warapper>
      <Tooltip
        TransitionComponent={Zoom}
        title="Search for all messages with label inbox"
        placement="bottom"
      >
        <InboxButton>Inbox</InboxButton>
      </Tooltip>
      <Tooltip
        TransitionComponent={Zoom}
        title="Remove label inbox from this conversation"
        placement="bottom"
      >
        <CloseButton>X</CloseButton>
      </Tooltip>
    </Warapper>
  );
}

export default SimpleButton;

const Warapper = styled.div`
  display: flex;
`;
const InboxButton = styled.button`
  border: none;
  background: lightgray;
  font-size: 12px;
  border-radius: 3px 0 0 3px;
  padding: 2px;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :hover {
    background: #202124;
    color: lightgray;
  }
`;
const CloseButton = styled.button`
  border: none;
  background: lightgray;
  font-size: 12px;
  border-radius: 0 3px 3px 0;
  padding: 2px 5px;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :hover {
    background: #202124;
    color: lightgray;
  }
`;
