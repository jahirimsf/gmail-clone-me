import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

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
        <Tooltip
          TransitionComponent={Zoom}
          title="Input tools on/off (Ctrl-Shift-K)"
          placement="bottom"
        >
          <IconButton
            style={{ paddingLeft: "4px", paddingRight: "2px" }}
            className={classes.root}
          >
            <Icon style={{ fontSize: "20px" }} />
          </IconButton>
        </Tooltip>
      ) : (
        <Icon
          style={{ paddingLeft: "2px", paddingRight: "2px" }}
          className={classes.root}
        />
      )}
      <Tooltip
        TransitionComponent={Zoom}
        title="Select input tool"
        placement="bottom"
      >
        <IconButton className={classes.root} size="small">
          <ArrowDropDownIcon />
        </IconButton>
      </Tooltip>
    </Wrapper>
  );
}

export default GroupButton;

const Wrapper = styled.div``;
