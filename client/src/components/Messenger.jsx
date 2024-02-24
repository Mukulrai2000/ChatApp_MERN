import { Fragment, useContext } from "react";

import { AppBar, Toolbar, styled, Box } from "@mui/material";

import { AccountContext } from "../context/AccountProvider";
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";

const Component = styled(Box)`
  height: 100vh;
  background-color: #e0e0e0;
`;

const Header = styled(AppBar)`
  height: 126px;
  background-color: #00a884;
  box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
  height: 222px;
  background-color: #00a884;
  box-shadow: none;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Fragment>
      <Component>
        {account ? (
          <>
            <Header>
              <Toolbar></Toolbar>
            </Header>
            <ChatDialog />
          </>
        ) : (
          <>
            <LoginHeader>
              <Toolbar></Toolbar>
            </LoginHeader>
            <LoginDialog />
          </>
        )}
      </Component>
    </Fragment>
  );
};

export default Messenger;
