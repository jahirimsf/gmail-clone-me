import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import styled from "styled-components";
import { Button, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import GroupButton from "../button/GroupButton";
import { dataMailViewIcon } from "../data/dataMailViewIcon";

function InboxMailViewSettingsHeader({ inbox, sent, starred }) {
  const history = useHistory();
  const handleRouting = () => {
    if (inbox) {
      history.push("/");
    } else if (sent) {
      history.push("/sent");
    } else if (starred) {
      history.push("/star");
    }
  };
  return (
    <MailSettingsHeader>
      <IconButton onClick={handleRouting}>
        <ArrowBackIcon />
      </IconButton>
      <MailHeaderLeft>
        {dataMailViewIcon.map(({ Icon, title }) => (
          <IconButton>{Icon}</IconButton>
        ))}
      </MailHeaderLeft>
      <MailHeaderRight>
        <PaginationButton>1-100 of 300</PaginationButton>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
        <GroupButton Icon={KeyboardIcon} split={true} />
      </MailHeaderRight>
    </MailSettingsHeader>
  );
}

export default InboxMailViewSettingsHeader;

const MailSettingsHeader = styled.div`
  display: grid;
  grid-template-columns: 48px auto 250px;
  align-items: center;
  gap: 5px;
  height: 48px;
  box-shadow: inset 0 -1px 0 0 rgb(100 121 143 / 12%);

  .MuiSvgIcon-root {
    font-size: 20px;
  }
`;
const MailHeaderLeft = styled.div`
  .MuiSvgIcon-root {
    font-size: 20px;
  }
`;
const MailHeaderRight = styled.div`
  display: flex;
  align-items: center;
  .MuiSvgIcon-root {
    font-size: 20px;
  }
`;

const PaginationButton = styled(Button)`
  text-transform: lowercase !important;
`;

// {dataMailViewIcon.map(({ Icon, title }) => (
//     <IconButton>{Icon}</IconButton>
//   ))}
