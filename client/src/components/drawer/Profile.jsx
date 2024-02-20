import { Fragment, useContext } from "react";

import { Box, Typography, styled } from "@mui/material";

import { AccountContext } from "../../context/AccountProvider";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Image = styled("img")({
  width: 200,
  height: 200,
  borderRadius: "50%",
  padding: "25px 0",
});

const BoxWrapper = styled(Box)`
  background: #ffffff;
`;

const Profile = () => {
  const { account } = useContext(AccountContext);
  return (
    <Fragment>
      <ImageContainer>
        <Image src={account?.picture} alt="dp" />
      </ImageContainer>
      <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{account?.name}</Typography>
      </BoxWrapper>
      <Box></Box>
      <Box></Box>
    </Fragment>
  );
};

export default Profile;
