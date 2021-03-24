import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import EmailsTopHeader from "../layout/EmailsTopHeader";
import SentMailRow from "./SentMailRow";

function SentMail({ sidebar, user, setSentLength }) {
  const [mails, setMails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userId = user.userId;
    if (userId) {
      db.collection("mails")
        .where("from", "==", user.userEmail)
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          let newMails = snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));
          setMails(newMails);
          setSentLength(newMails.length);
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
          {mails?.map((mail) => (
            <SentMailRow
              key={mail.id}
              id={mail.id}
              sidebar={sidebar}
              userName={mail.data.userName}
              subject={mail.data.subject}
              message={mail.data.message}
              starred={mail.data.fromStarred}
              important={mail.data.fromImportant}
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

export default SentMail;

const EmailsWrapper = styled.div`
  height: 100%;
`;

const MailRowView = styled.div`
  height: 81vh;
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
  padding-bottom: 20px;
  height: 81vh;
  margin: 0px 5px 10px 5px;
`;
