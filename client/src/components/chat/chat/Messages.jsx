import { Fragment, useContext, useState, useEffect } from "react";

import { Box, styled } from "@mui/material";

import { AccountContext } from "../../../context/AccountProvider";
import { newMessage, getMessages } from "../../../service/api";
import Footer from "./Footer";
import Message from "./Message";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  backgroud-size: 50%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Messages = ({ person, conversation }) => {
  console.log("person" , person)
  console.log("conversation" , conversation)
  const { account } = useContext(AccountContext);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {
        senderId: account?.sub,
        receiverId: person?.sub,
        conversationId: conversation?._id,
        type: "text",
        text: value,
      };
      await newMessage(message);

      setValue("");
    }
  };

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
      console.log("data", data);
      setMessages(data);
    };
    conversation._id && getMessageDetails();
  }, [person._id, conversation._id]);

  return (
    <Fragment>
      <Wrapper>
        <Component>
          {messages &&
            messages?.map((message) => {
              return <Message message={message}/>;
            })}
        </Component>
        <Footer sendText={sendText} value={value} setValue={setValue} />
      </Wrapper>
    </Fragment>
  );
};

export default Messages;
