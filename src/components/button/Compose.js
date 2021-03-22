import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
function Compose({ sidebar }) {
  return (
    <>
      {sidebar ? (
        <Wrapper sidebar>
          <AddIcon fontSize="large" />
        </Wrapper>
      ) : (
        <Wrapper>
          <AddIcon fontSize="large" />
          <p>Compose</p>
        </Wrapper>
      )}
    </>
  );
}

export default Compose;

const Wrapper = styled.button`
  display: grid;
  grid-template-columns: ${({ sidebar }) => (sidebar ? "35%" : "35% auto")};
  width: ${({ sidebar }) => (sidebar ? "45px" : "auto")};
  height: ${({ sidebar }) => (sidebar ? "45px" : "auto")};
  background: #fff;
  align-items: center;
  padding: ${({ sidebar }) => (sidebar ? "6px" : "6px 32px 6px 5px")};
  border-radius: 50px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);
  cursor: pointer;
  border: none;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  color: #3c4043;
  font-weight: 500;
  min-width: ${({ sidebar }) => (sidebar ? "45px" : "56px")};
  transition: box-shadow 0.08s linear,
    min-width 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%),
      0 4px 8px 3px rgb(60 64 67 / 15%);
    background-color: #fafafb;
  }
  :focus {
    outline: none;
  }
`;
