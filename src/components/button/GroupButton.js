import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "24px",
    height: "40px",
    padding: "0",
    margin: "0",
    borderRadius: "6px",
  },
});

function GroupButton({ Icon, split }) {
  const classes = useStyles();
  return (
    <Wrapper>
      {split ? (
        <IconButton
          style={{ paddingLeft: "4px", paddingRight: "2px" }}
          className={classes.root}
        >
          <Icon style={{ fontSize: "20px" }} />
        </IconButton>
      ) : (
        <Icon
          style={{ paddingLeft: "2px", paddingRight: "2px" }}
          className={classes.root}
        />
      )}

      <IconButton className={classes.root} size="small">
        <ArrowDropDownIcon />
      </IconButton>
    </Wrapper>
  );
}

export default GroupButton;

const Wrapper = styled.div``;
