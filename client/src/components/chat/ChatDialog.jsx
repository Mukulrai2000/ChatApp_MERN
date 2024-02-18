import { Fragment } from "react";

import { Dialog } from "@mui/material";

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
      >
        I am Here
      </Dialog>
    </Fragment>
  );
};

export default ChatDialog;
