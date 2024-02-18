import { Fragment } from "react";

import { AppBar, Toolbar, styled, Box } from "@mui/material";

import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";

const Component = styled(Box)`
height:100vh;
`

const Header = styled(AppBar)`
  height: 222px;
  background-color: #00a884;
  box-shadow: none;
`;

const Messenger = () => {
  return (
    <Fragment>
      <Component>
        <Header>
          <Toolbar></Toolbar>
        </Header>
        <LoginDialog />
      </Component>
    </Fragment>
  );
};

export default Messenger;
