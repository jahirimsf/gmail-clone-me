import { Checkbox, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { db } from "../../firebase";
import { useHistory } from "react-router-dom";

import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

function SentMailRow({
  id,
  sidebar,
  userName,
  subject,
  message,
  starred,
  important,
  timestamp,
}) {
  const [star, setStar] = useState(starred);
  const [impor, setImpor] = useState(important);

  const history = useHistory();

  const ref = db.collection("mails").doc(id);
  const handleStar = () => {
    if (!star) {
      ref.set(
        {
          fromStarred: true,
        },
        { merge: true }
      );
      setStar(true);
    } else {
      ref.set(
        {
          fromStarred: false,
        },
        { merge: true }
      );
      setStar(false);
    }
  };

  const handleImportant = () => {
    if (!impor) {
      ref.set(
        {
          fromImportant: true,
        },
        { merge: true }
      );
      setImpor(true);
    } else {
      ref.set(
        {
          fromImportant: false,
        },
        { merge: true }
      );
      setImpor(false);
    }
  };

  return (
    <Wrapper>
      <ItemLeft>
        <Checkbox size="small" />
        <Tooltip
          TransitionComponent={Zoom}
          title={!star ? "Not starred" : "starred"}
          placement="bottom"
        >
          <IconButton onClick={handleStar} size="small">
            {!star ? <StarBorderIcon /> : <StarIcon htmlColor="#f7cb69" />}
          </IconButton>
        </Tooltip>
        <Tooltip
          TransitionComponent={Zoom}
          title={
            !impor ? (
              <>
                <i> Click to teach gmail this conversation is important.</i>
              </>
            ) : (
              <>
                <p>Important mainly because it was sent directly to you.</p>
                <i> Click to teach gmail this conversation is important.</i>
              </>
            )
          }
          placement="bottom"
        >
          <IconButton onClick={handleImportant} size="small">
            {!impor ? (
              <LabelImportantIcon />
            ) : (
              <LabelImportantIcon htmlColor="#f7cb69" />
            )}
          </IconButton>
        </Tooltip>
      </ItemLeft>

      <ItemRight
        onClick={() => history.push(`/sentView/${id}`)}
        sidebar={sidebar ? 1 : 0}
      >
        <p> {userName}</p>

        <div>
          <p>
            {subject} -<span>{message}</span>
          </p>
        </div>

        <p>{timestamp}</p>
      </ItemRight>
    </Wrapper>
  );
}

export default SentMailRow;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;
  padding-right: 10px;
  padding-left: 4px;
  gap: 5px;

  box-shadow: inset 0 -1px 0 0 rgb(100 121 143 / 12%);

  :hover {
    -webkit-box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
      0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
      0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    z-index: 1;
  }
`;

const ItemLeft = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
`;
const ItemRight = styled.div`
  display: grid;
  grid-template-columns: 200px auto 80px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  text-decoration: none;

  p {
    font-size: 13px;
  }
  div {
    display: flex;

    p {
      width: ${({ sidebar }) => (sidebar ? "58vw" : "45vw")};
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        font-size: 12px;
        letter-spacing: 1.5;
        color: gray;
      }
    }
  }
  .unread {
    font-weight: 650;
    color: black;
    span {
      font-weight: 500;
    }
  }
`;
