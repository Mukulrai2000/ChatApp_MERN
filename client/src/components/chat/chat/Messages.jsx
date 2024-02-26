import { Fragment, useContext, useState } from "react";

import { Box, styled } from "@mui/material";

import { AccountContext } from "../../../context/AccountProvider";
import Footer from "./Footer";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  backgroud-size: 50%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Messages = ({ person, conversation }) => {
  const { account } = useContext(AccountContext);
  const [value, setValue] = useState("");

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
    }
  };

  return (
    <Fragment>
      <Wrapper>
        <Component>F</Component>
        <Footer sendText={sendText} setValue={setValue} />
      </Wrapper>
    </Fragment>
  );
};

export default Messages;
