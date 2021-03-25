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

function StarredMailRow({
  id,
  sidebar,
  userName,
  subject,
  message,
  starred,
  important,
  read,
  timestamp,
}) {
  const [star, setStar] = useState(starred);
  const [impor, setImpor] = useState(important);
  const [isread, setIsread] = useState(read);
  const history = useHistory();

  const ref = db.collection("mails").doc(id);
  const handleStar = () => {
    if (!star) {
      ref.set(
        {
          toStarred: true,
        },
        { merge: true }
      );
      setStar(true);
    } else {
      ref.set(
        {
          toStarred: false,
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
          toImportant: true,
        },
        { merge: true }
      );
      setImpor(true);
    } else {
      ref.set(
        {
          toImportant: false,
        },
        { merge: true }
      );
      setImpor(false);
    }
  };

  const handleRead = () => {
    if (!isread) {
      ref.set(
        {
          read: true,
        },
        { merge: true }
      );
      setIsread(true);
    }
    history.push(`/starred/${id}`);
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
      <ItemRight onClick={handleRead} sidebar={sidebar ? 1 : 0}>
        <p className={!isread ? "" : "unread"}> {userName}</p>

        <div className={!isread ? "" : "unread"}>
          <p>
            {subject} -<span>{message}</span>
          </p>
        </div>

        <p className={!isread ? "" : "unread"}>{timestamp}</p>
      </ItemRight>
    </Wrapper>
  );
}

export default StarredMailRow;

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
  grid-template-columns: 200px auto 90px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  p {
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 10px;
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

  @media screen and (max-width: 1224px) {
    div {
      display: flex;

      p {
        width: ${({ sidebar }) => (sidebar ? "660px" : "480px")};
      }
    }
  }

  @media screen and (max-width: 1024px) {
    div {
      display: flex;

      p {
        width: ${({ sidebar }) => (sidebar ? "450px" : "280px")};
      }
    }
  }

  @media screen and (max-width: 991px) {
    display: grid;
    grid-template-columns: 150px auto 90px;
    div {
      display: flex;

      p {
        width: ${({ sidebar }) => (sidebar ? "450px" : "280px")};
      }
    }
  }

  @media screen and (max-width: 667px) {
    display: grid;
    grid-template-columns: 100px auto 90px;
    div {
      display: flex;

      p {
        width: ${({ sidebar }) => (sidebar ? "225px" : "120px")};
      }
    }
  }
`;
