import { Fragment } from "react";

import { Box } from "@mui/material";

import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";

const Menu = () => {
  return (
    <Fragment>
      <Box>
        <Header />
        <Search />
        <Conversations />
      </Box>
    </Fragment>
  );
};

export default Menu;
