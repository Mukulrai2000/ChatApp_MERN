import { Fragment, useEffect, useState, useContext } from "react";

import { Box, styled, Divider } from "@mui/material";

import { AccountContext } from "../../../context/AccountProvider";
import { getUsers } from "../../../service/api";
import Conversation from "./Conversation";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const StyledDivider = styled(Divider)`
  margin: 0, 0, 0, 70px;
  background: #e9edef;
  opacity: 0.6;
`;

const Conversations = ({ text }) => {
  const { account } = useContext(AccountContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      const filteredData = response?.filter((user) =>
        user?.name?.toLowerCase().includes(text?.toLowerCase())
      );
      setUsers(filteredData);
    };
    fetchData();
  }, [text]);
  return (
    <Fragment>
      <Component>
        {users &&
          users?.map((user) => {
            return (
              user?.sub !== account?.sub && (
                <>
                  <Conversation user={user} />
                  <StyledDivider />
                </>
              )
            );
          })}
      </Component>
    </Fragment>
  );
};

export default Conversations;
