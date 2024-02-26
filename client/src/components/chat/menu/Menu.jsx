import { Fragment, useState } from "react";

import { Box } from "@mui/material";

import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";

const Menu = () => {
  const [text, setText] = useState("");
  return (
    <Fragment>
      <Box>
        <Header />
        <Search setText={setText}/>
        <Conversations text={text} />
      </Box>
    </Fragment>
  );
};

export default Menu;
