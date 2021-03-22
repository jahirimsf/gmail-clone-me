import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";
function SideIcons() {
  return (
    <SideIconsWrapper>
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png"
        alt=""
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png"
        alt=""
      />

      <img
        src="https://www.androidpolice.com/wp-content/uploads/2018/03/nexus2cee_new-tasks-icon.png"
        alt=""
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png"
        alt=""
      />
      <div></div>
      <IconButton size="small">
        <AddIcon />
      </IconButton>
    </SideIconsWrapper>
  );
}

export default SideIcons;
const SideIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
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
