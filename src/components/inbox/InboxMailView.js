import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import LabelImportantIcon from "@material-ui/icons/LabelImportant";

import PrintIcon from "@material-ui/icons/Print";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ReplyIcon from "@material-ui/icons/Reply";
import ForwardIcon from "@material-ui/icons/Forward";
import StarIcon from "@material-ui/icons/Star";
import SimpleButton from "../button/SimpleButton";
import InboxMailViewSettingsHeader from "./InboxMailViewSettingsHeader";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";

function InboxMailView({ sidebar }) {
  const [isLoading, setIsLoading] = useState(true);
  const [mail, setMail] = useState();
  const { mailId } = useParams();

  const [star, setStar] = useState();
  const [impor, setImpor] = useState();

  const ref = db.collection("mails").doc(mailId);
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

  useEffect(() => {
    if (mailId) {
      ref
        .get()
        .then((doc) => {
          if (doc.exists) {
            setMail(doc.data());
            setIsLoading(false);
            setStar(doc.data().toStarred);
            setImpor(doc.data().toImportant);
          }
        })
        .catch((error) => {});
    }
  }, [mailId]);
  return (
    <>
      {isLoading ? (
        <Wrapper>
          <Loading>
            <CircularProgress color="secondary" />
          </Loading>
        </Wrapper>
      ) : (
        <Wrapper>
          <InboxMailViewSettingsHeader sidebar={sidebar} inbox />
          <MailViewSection sidebar={sidebar ? 1 : 0}>
            <MailTitleHeader>
              <LeftButton>
                <Title>Titele</Title>
                <IconButton onClick={handleImportant} size="small">
                  {impor ? (
                    <LabelImportantIcon htmlColor="#f7cb69" />
                  ) : (
                    <LabelImportantIcon />
                  )}
                </IconButton>
                <SimpleButton />
              </LeftButton>

              <RightButton>
                <IconButton>
                  <PrintIcon />
                </IconButton>
                <IconButton>
                  <OpenInNewIcon />
                </IconButton>
              </RightButton>
            </MailTitleHeader>

            <MailUserHeader>
              <MailUserLeft>
                <Avatar />
                <div>
                  <h6>
                    {mail.userName} <span>-{mail.from}</span>
                  </h6>
                  <Span>
                    to me
                    <button>
                      <ArrowDropDownIcon />
                    </button>
                  </Span>
                </div>
              </MailUserLeft>

              <MailUserRight>
                <p>
                  {" "}
                  {new Date(mail.timestamp?.seconds * 1000).toLocaleString()}
                </p>
                <div>
                  <IconButton onClick={handleStar} size="small">
                    {star ? (
                      <StarIcon htmlColor="#f7cb69" />
                    ) : (
                      <StarBorderIcon />
                    )}
                  </IconButton>
                  <IconButton>
                    <ReplyIcon />
                  </IconButton>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </div>
              </MailUserRight>
            </MailUserHeader>

            <MailMessage>{mail.message}</MailMessage>

            <MailFooter>
              <Button startIcon={<ReplyIcon />} variant="outlined">
                Reply
              </Button>
              <Button startIcon={<ForwardIcon />} variant="outlined">
                Forword
              </Button>
            </MailFooter>
          </MailViewSection>
        </Wrapper>
      )}
    </>
  );
}

export default InboxMailView;

const Wrapper = styled.div`
  background-color: white;
  overflow: hidden;
`;
const MailViewSection = styled.div`
  overflow-y: scroll;
  scroll-behavior: smooth;
  width: ${({ sidebar }) => (sidebar ? "90.5vw" : "76.3vw")};
  height: 80vh;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const MailTitleHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px 0 23px;
  height: 48px;
  justify-content: space-between;
  .MuiSvgIcon-root {
    font-size: 20px;
  }
`;
const MailUserHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  margin: 10px 15px 10px 10px;
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  font-size: 13px;
  margin-top: 5px;
  button {
    border: none;
    background: transparent;
    width: 15px;
    height: 20px;
    border-radius: 2px;
    padding: 0;
    margin-left: 5px;
    :hover {
      background: lightgray;
    }
    :focus {
      outline: none;
    }
    .MuiSvgIcon-root {
      font-size: 14px;
      margin: 0;
    }
  }
`;
const MailUserLeft = styled.div`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    h6 {
      display: flex;
      font-size: 12px;
      span {
        font-weight: 400;
      }
    }
  }
`;
const MailUserRight = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 14px;
    margin-right: 15px;
  }
  .MuiSvgIcon-root {
    font-size: 20px;
  }
`;

const Title = styled.p`
  font-size: 18px;
`;
const RightButton = styled.div`
  display: flex;
  align-items: center;
`;
const LeftButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MailMessage = styled.div`
  padding: 20px;
  font-size: 14px;
`;

const MailFooter = styled.div`
  padding-left: 30px;
  gap: 20px;
  display: flex;
  margin-top: 10px;
  .MuiButton-root {
    text-transform: capitalize;
    color: gray;
  }
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 83vh;
  width: 100%;
`;
