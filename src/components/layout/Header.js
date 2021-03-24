import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

function Header({ handleSidebar, user, signOut }) {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Tooltip
          TransitionComponent={Zoom}
          title="Main menu"
          placement="bottom"
        >
          <IconButton onClick={handleSidebar}>
            <MenuIcon />
          </IconButton>
        </Tooltip>

        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="LogoImage"
        />
      </LogoWrapper>
      <SearchWrapper>
        <Tooltip TransitionComponent={Zoom} title="Search" placement="bottom">
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Tooltip>
        <input type="text" placeholder="Search mail" />
        <Tooltip
          TransitionComponent={Zoom}
          title="Show search options"
          placement="bottom"
        >
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </Tooltip>
      </SearchWrapper>
      <SettingsWrapper>
        <Tooltip TransitionComponent={Zoom} title="Support" placement="bottom">
          <IconButton>
            <HelpOutlineIcon />
          </IconButton>
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} title="Settings" placement="bottom">
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          TransitionComponent={Zoom}
          title="Google app"
          placement="bottom"
        >
          <IconButton>
            <AppsIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          TransitionComponent={Zoom}
          title={
            <>
              <h3>Google accounts</h3>
              <p>{user.userName}</p>
              <p>{user.userEmail}</p>
            </>
          }
          placement="bottom"
        >
          <IconButton size="small">
            <Avatar onClick={signOut} src={user?.userPhoto} />
          </IconButton>
        </Tooltip>
      </SettingsWrapper>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 17% auto min-content;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  height: 60px;
  box-shadow: inset 0 -1px 0 0 rgb(100 121 143 / 12%);
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 991px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 667px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  .MuiIconButton-root {
  }
  .MuiSvgIcon-root {
    font-size: 23px;
  }
  img {
    height: 35px;
    padding-left: 10px;
  }
  @media screen and (max-width: 991px) {
  }
  @media screen and (max-width: 667px) {
    .MuiIconButton-root {
    }
    .MuiSvgIcon-root {
      font-size: 18px;
    }
    img {
      height: 30px;
      padding-left: 2px;
    }
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgb(180, 180, 180, 0.29);
  /* background: #f1f3f4; */
  border-radius: 8px;
  max-width: 620px;
  padding: 0 10px;
  margin: 0 25px;
  width: 100%;

  input {
    background: transparent;
    border: none;
    padding: 15px;
    color: #5f6368;
    width: 100%;

    :focus {
      outline: none;
    }
  }
  .MuiIconButton-root {
    padding: 8px;
  }
  .MuiSvgIcon-root {
    font-size: 23px;
    color: #5f6368;
  }

  @media screen and (max-width: 1224px) {
    max-width: 580px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 550px;
  }
  @media screen and (max-width: 991px) {
    max-width: 500px;
  }
  @media screen and (max-width: 667px) {
    max-width: 280px;
    .MuiSvgIcon-root {
      font-size: 18px;
      color: #5f6368;
    }
  }
`;

const SettingsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  .MuiIconButton-root {
    padding: 8px;
  }
  .MuiSvgIcon-root {
    font-size: 23px;
  }
  .MuiAvatar-root {
    height: 35px;
    width: 35px;
  }
  @media screen and (max-width: 991px) {
  }
  @media screen and (max-width: 667px) {
    gap: 2px;
    .MuiIconButton-root {
      padding: 6px;
    }
    .MuiSvgIcon-root {
      font-size: 18px;
    }
    .MuiAvatar-root {
      height: 30px;
      width: 30px;
    }
  }
`;
