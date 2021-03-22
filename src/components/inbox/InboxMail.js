import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import EmailsTopHeader from "../layout/EmailsTopHeader";
import InboxMailRow from "./InboxMailRow";

function InboxMail({ sidebar, user }) {
  const [mails, setMails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userId = user.userId;
    if (userId) {
      db.collection("mails")
        .where("to", "==", user.userEmail)
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMails(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
          setIsLoading(false);
        });
    }
  }, []);
  return (
    <EmailsWrapper>
      <EmailsTopHeader />
      {isLoading ? (
        <Loading>
          <CircularProgress color="secondary" />
        </Loading>
      ) : (
        <MailRowView>
          {mails?.map((mail, index) => (
            <InboxMailRow
              key={index.id}
              id={mail.id}
              sidebar={sidebar}
              userName={mail.data.userName}
              subject={mail.data.subject}
              message={mail.data.message}
              starred={mail.data.toStarred}
              important={mail.data.toImportant}
              read={mail.data.read}
              timestamp={new Date(
                mail.data.timestamp * 1000
              ).toLocaleTimeString()}
            />
          ))}
        </MailRowView>
      )}
    </EmailsWrapper>
  );
}

export default InboxMail;

const EmailsWrapper = styled.div`
  height: 100%;
  background: whitesmoke;
`;

const MailRowView = styled.div`
  height: 81vh;
  background: white;
  padding-bottom: 20px;
  overflow-y: scroll;
  margin: 0px 5px 10px 5px;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
