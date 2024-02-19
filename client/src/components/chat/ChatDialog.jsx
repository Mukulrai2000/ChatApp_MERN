import { Fragment } from "react";

import { Dialog, Box, styled } from "@mui/material";

import Menu from "./menu/Menu";
import EmptyChat from "./empChat/EmptyChat";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  min-width: 450px;
`;

const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const dialogStyle = {
  height: "96%",
  width: "100%",
  margin: "70px 20px 60px",
  borderRadius: 0,
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const ChatDialog = () => {
  return (
    <Fragment>
      <Dialog
        open={true}
        PaperProps={{ sx: dialogStyle }}
        hideBackdrop={true}
        maxWidth={"md"}
      >
        <Component>
          <LeftComponent>
            <Menu />
          </LeftComponent>
          <RightComponent>
            <EmptyChat />
          </RightComponent>
        </Component>
      </Dialog>
    </Fragment>
  );
};

export default ChatDialog;