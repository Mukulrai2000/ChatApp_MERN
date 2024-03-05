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

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Messages = ({ person, conversation }) => {
  const { account } = useContext(AccountContext);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const [file, setFile] = useState();
  const [image, setImage] = useState("");

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    let message = {};
    if (code === 13) {
      if (!file) {
        message = {
          senderId: account?.sub,
          receiverId: person?.sub,
          conversationId: conversation?._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account?.sub,
          receiverId: person?.sub,
          conversationId: conversation?._id,
          type: "file",
          text: image,
        };
      }
    }

    await newMessage(message);

    setValue("");
    setFile("");
    setImage("");
    setNewMessageFlag((prev) => !prev);
  };

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
      setMessages(data);
    };
    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, newMessageFlag]);

  return (
    <Fragment>
      <Wrapper>
        <Component>
          {messages &&
            messages?.map((message) => {
              return (
                <Container>
                  <Message message={message} />
                </Container>
              );
            })}
        </Component>
        <Footer
          sendText={sendText}
          value={value}
          setValue={setValue}
          file={file}
          setFile={setFile}
          setImage={setImage}
        />
      </Wrapper>
    </Fragment>
  );
};

export default Messages;
