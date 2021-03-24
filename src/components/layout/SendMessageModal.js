import { Button, ButtonGroup, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { sendButtonIcon } from "../data/sendButtonIcon";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import firebase from "firebase";
import { db } from "../../firebase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

function SendMessageModal({ setOpenModal, user }) {
  const [values, setValues] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newMail = {
      authorId: user.userId,
      to: values.email,
      from: user.userEmail,
      userName: user.userName,
      subject: values.subject,
      message: values.message,
      read: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      fromStarred: false,
      fromImportant: false,
      toStarred: false,
      toImportant: false,
      photo: user.userPhoto,
    };
    if (!newMail.to) {
      toast.error("Email is required ");
    } else if (!/\S+@\S+\.\S+/.test(newMail.to)) {
      toast.error("Email is invalid ");
    } else if (!newMail.subject) {
      toast.error("subject is required ");
    } else if (!newMail.message) {
      toast.error("Message is required ");
    } else {
      db.collection("mails")
        .add(newMail)
        .then(() => {
          setValues({
            email: "",
            subject: "",
            message: "",
          });
          setOpenModal(false);
          toast.success("Sent Mail Succesfully 🚀 🚀🚀 ");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <>
      <Wrapper>
        <Header>
          <p>New Message</p>
          <Tooltip
            TransitionComponent={Zoom}
            title="Save & close"
            placement="bottom"
          >
            <IconButton onClick={() => setOpenModal(false)} size="small">
              <CloseIcon htmlColor="gray" />
            </IconButton>
          </Tooltip>
        </Header>
        <Container>
          <To>
            <input
              name="email"
              values={values.email}
              onChange={handleChange}
              type="email"
              placeholder="To"
            />
            <div>
              <span>Cc</span>
              <span> Bcc</span>
            </div>
          </To>
          <Subject>
            <input
              name="subject"
              value={values.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
            />
          </Subject>
          <Message>
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
            />
          </Message>

          <BottomHeader>
            <ButtonGroup size="small">
              <Tooltip
                TransitionComponent={Zoom}
                title="Send (Ctrl-Enter)"
                placement="bottom"
              >
                <Button onClick={onSubmit} variant="contained" color="primary">
                  Send
                </Button>
              </Tooltip>
              <Tooltip
                TransitionComponent={Zoom}
                title="Mre send options"
                placement="bottom"
              >
                <Button
                  style={{ paddingLeft: "0", paddingRight: "0" }}
                  variant="contained"
                  color="primary"
                >
                  <ArrowDropDownIcon />
                </Button>
              </Tooltip>
            </ButtonGroup>
            <MiddleButton>
              {sendButtonIcon.map(({ icon, title }) => (
                <Tooltip
                  TransitionComponent={Zoom}
                  title={title}
                  placement="top"
                >
                  <IconButton size="small">{icon}</IconButton>
                </Tooltip>
              ))}
            </MiddleButton>
            <RightButton>
              <Tooltip
                TransitionComponent={Zoom}
                title="More options"
                placement="top"
              >
                <IconButton size="small">
                  <MoreVertIcon />
                </IconButton>
              </Tooltip>
              <Tooltip
                TransitionComponent={Zoom}
                title="Discard draft (Ctrl-shift-D)"
                placement="top"
              >
                <IconButton size="small">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </RightButton>
          </BottomHeader>
        </Container>
      </Wrapper>
      <ToastContainer />
    </>
  );
}

export default SendMessageModal;

const Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 50px;
  width: 40vw;
  height: 65vh;
  z-index: 1;
  display: grid;
  grid-template-rows: 35px auto;
  background: #fff;
  overflow: hidden;
  -webkit-border-radius: 8px 8px 0 0;
  border-radius: 8px 8px 0 0;
  -webkit-box-shadow: 0 8px 10px 1px rgb(0 0 0 / 14%),
    0 3px 14px 2px rgb(0 0 0 / 12%), 0 5px 5px -3px rgb(0 0 0 / 20%);
  box-shadow: 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%),
    0 5px 5px -3px rgb(0 0 0 / 20%);
`;
const Header = styled.div`
  background: #202124;
  padding-left: 15px;
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
  color: #fff;
  align-items: center;
`;
const To = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: inset 0 -1px 0 0 rgb(100 121 143 / 12%);

  input {
    border: none;
    width: 80%;
    height: 100%;
    background: transparent;
    font-size: 13px;
    color: gray;
    :focus {
      outline: none;
    }
  }
`;

const Container = styled.div`
  padding: 0 20px 20px 20px;
  display: grid;
  position: relative;
  overflow: hidden;
  grid-template-rows: repeat(2, 30px) auto 35px;
`;

const Subject = styled.div`
  background: white;
  box-shadow: inset 0 -1px 0 0 rgb(100 121 143 / 12%);
  overflow: hidden;
  input {
    border: none;
    width: 100%;
    height: 100%;
    font-size: 13px;
    color: gray;
    background: transparent;
    :focus {
      outline: none;
    }
  }
`;

const Message = styled.div`
  background: white;
  padding: 5px;
  width: 100%;
  height: 100%;
  margin-top: 5px;
  background: white;
  textarea {
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    resize: none;
    :focus {
      outline: none;
    }
  }
`;
const BottomHeader = styled.div`
  display: grid;
  grid-template-columns: min-content auto min-content;
  align-items: center;
  background: #fff;
`;
const MiddleButton = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  padding-left: 5px;
  .MuiSvgIcon-root {
    font-size: 20px;
  }
`;

const RightButton = styled.div`
  display: flex;
  .MuiSvgIcon-root {
    font-size: 20px;
  }
`;
