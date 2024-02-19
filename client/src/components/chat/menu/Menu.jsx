import { Fragment } from "react";

import { Box } from "@mui/material";

import Header from "./Header";
import Search from "./Search";

const Menu = () => {
  return (
    <Fragment>
      <Box>
        <Header />
        <Search />
      </Box>
    </Fragment>
  );
};

export default Menu;
