import { Fragment } from "react";

import { Box, Drawer, Typography, styled } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Profile from "./Profile";

const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #ffffff;
  display: flex;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
  }
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const Text = styled(Typography)`
  font-size: 18px;
`;

const drawerStyle = {
  left: 20,
  top: 17,
  height: "95%",
  width: "30%",
  boxShadow: "none",
};

const InfoDrawer = ({ openDrawer, setOpenDrawer }) => {
  const handleClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Fragment>
      <Drawer
        open={openDrawer}
        PaperProps={{ sx: drawerStyle }}
        onClose={handleClose}
        style={{ zIndex: 1500 }}
      >
        <Header>
          <ArrowBackIcon onClick={handleClose} />
          <Text>Profile</Text>
        </Header>
        <Component>
          <Profile />
        </Component>
      </Drawer>
    </Fragment>
  );
};

export default InfoDrawer;
