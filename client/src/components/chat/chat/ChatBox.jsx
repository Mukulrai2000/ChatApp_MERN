import { Fragment, useContext } from "react";

import { Box } from "@mui/material";

import { AccountContext } from "../../../context/AccountProvider";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const ChatBox = () => {
  const { person } = useContext(AccountContext);
  return (
    <Fragment>
      <Box>
        <ChatHeader person={person} />
        <Messages person={person} />
      </Box>
    </Fragment>
  );
};

export default ChatBox;
