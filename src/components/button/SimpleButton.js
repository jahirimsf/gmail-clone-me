import React from "react";
import styled from "styled-components";

function SimpleButton() {
  return (
    <Warapper>
      <InboxButton>Inbox</InboxButton>
      <CloseButton>X</CloseButton>
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
