import { Fragment, useState } from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem, styled } from "@mui/material";

const MenuOption = styled(MenuItem)`
  font-size: 14px;
  padding: 15px 60px 5px 24px;
  color: #4a4a4a;
`;

const HeaderMenu = () => {
  const [open, setOpen] = useState(null);

  const handleClose = () => {
    setOpen(null);
  };

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  return (
    <Fragment>
      <MoreVertIcon onClick={handleClick} />
      <Menu
        anchorEl={open}
        keepMounted
        disableAutoFocusItem
        getContentAnchorE1={null}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuOption onClick={handleClose}>Profile</MenuOption>
      </Menu>
    </Fragment>
  );
};

export default HeaderMenu;
