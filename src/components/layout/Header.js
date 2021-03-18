import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import { Container } from "../style/GlobalStyle";
function Header() {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <IconButton>
          <MenuIcon />
        </IconButton>

        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="LogoImage"
        />
      </LogoWrapper>
      <SearchWrapper>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="Search mail" />
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </SearchWrapper>
      <SettingsWrapper>
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton size="small">
          <Avatar />
        </IconButton>
      </SettingsWrapper>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 17% auto min-content;
  align-items: center;
  background-color: white;
  height: 60px;
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
  background: #f1f3f4;
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
