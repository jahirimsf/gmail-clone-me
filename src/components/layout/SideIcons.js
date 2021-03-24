import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

function SideIcons() {
  return (
    <SideIconsWrapper>
      <Tooltip TransitionComponent={Zoom} title="Calender" placement="left">
        <IconButton size="small">
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png"
            alt=""
          />
        </IconButton>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title="Keep" placement="left">
        <IconButton size="small">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png"
            alt=""
          />
        </IconButton>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title="Tasks" placement="left">
        <IconButton size="small">
          <img
            src="https://www.androidpolice.com/wp-content/uploads/2018/03/nexus2cee_new-tasks-icon.png"
            alt=""
          />
        </IconButton>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title="Contacts" placement="left">
        <IconButton size="small">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png"
            alt=""
          />
        </IconButton>
      </Tooltip>

      <div></div>
      <Tooltip TransitionComponent={Zoom} title="Get Add-ons" placement="left">
        <IconButton size="small">
          <AddIcon />
        </IconButton>
      </Tooltip>
    </SideIconsWrapper>
  );
}

export default SideIcons;
const SideIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .MuiIconButton-root {
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

    img {
      height: 20px;
    }
  }

  div {
    width: 30px;
    margin: 20px auto;
    background-color: lightgray;
    color: lightgray;
    height: 2px;
    border-radius: 40px;
  }
`;
