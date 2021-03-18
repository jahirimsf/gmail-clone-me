import React from "react";
import styled from "styled-components";

function EmailsView() {
  return <EmailsWrapper>This is Emails View</EmailsWrapper>;
}

export default EmailsView;

const EmailsWrapper = styled.div`
  background-color: olive;
  height: calc(100%-60px);
`;
