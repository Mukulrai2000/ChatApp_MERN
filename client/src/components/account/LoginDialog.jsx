import { Fragment } from "react";

import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";

import { qrCodeImage } from "../../constants/data";

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "65%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "none",
};

const LoginDialog = () => {
  return (
    <Fragment>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
        <Component>
          <Container>
            <Typography>Use ChattyApp on your computer</Typography>
            <List>
              <ListItem>1. Open ChattyApp on your phone</ListItem>
              <ListItem>2. Tap Menu on Android, or Settings on iPhone</ListItem>
              <ListItem>3. Tap Linked devices and then Link a device</ListItem>
              <ListItem>
                4. Point your phone at this screen to capture the QR code
              </ListItem>
            </List>
          </Container>
          <Box>
            <img src={qrCodeImage} alt="qr_code" />
          </Box>
        </Component>
      </Dialog>
    </Fragment>
  );
};

export default LoginDialog;
