import React from "react";

import styled from "styled-components";

function SidebarButtonItems({ Icon, title, selected, active, number, select }) {
  return (
    <ButtonWrapper
      select={select ? 1 : 0}
      active={active ? 1 : 0}
      selected={selected ? 1 : 0}
    >
      <Icon />
      <p>{title}</p>
      <span>{number}</span>
    </ButtonWrapper>
  );
}

export default SidebarButtonItems;

const ButtonWrapper = styled.a`
  display: grid;
  grid-template-columns: 18% auto min-content;
  align-items: center;
  background-color: ${({ selected }) => (selected ? "#fcecec" : "#fff")};
  padding: 5px 20px;
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  border-radius: 0 100px 100px 0;
  cursor: pointer;
  margin-right: 4px;
  letter-spacing: 0.2px;
  transition: border-radius 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    margin 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    width 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  .MuiSvgIcon-root {
    font-size: 18px;
    color: ${({ selected }) => (selected ? "red" : "gray")};
  }
  p {
    font-size: ${({ active }) => (active ? ".9rem" : "0.875rem")};
    color: ${({ selected, select }) =>
      select ? "dark" : selected ? "red" : "gray"};
    font-weight: ${({ active }) => (active ? "500" : "400")};
  }
  span {
    display: ${({ active }) => (active ? "inline" : "none")};
    color: ${({ selected, select }) =>
      select ? "dark" : selected ? "red" : "gray"};
    font-weight: ${({ active }) => (active ? "500" : "400")};
    font-size: ${({ active }) => (active ? ".9rem" : "0.875rem")};
  }
  &:hover {
    background-color: #f5f7f7;
  }
`;
