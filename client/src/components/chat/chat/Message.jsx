import { Fragment } from "react";

import { Box, Typography, styled } from "@mui/material";

const Own = styled(Box)`
background: #dcf8c6;
max-width: 60%;
margin-left: auto;
`;

const Message = ({ message }) => {
  return (
    <Fragment>
      <Own>
        <Typography>{message?.text}</Typography>
        <Typography>{message?.createdAt}</Typography>
      </Own>
    </Fragment>
  );
};

export default Message;
