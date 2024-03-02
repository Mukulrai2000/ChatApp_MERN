import { Fragment, useEffect } from "react";

import { Box, InputBase, styled } from "@mui/material";
import EmojiEmotionsOutlined from "@mui/icons-material/EmojiEmotionsOutlined";
import { AttachFile, Mic } from "@mui/icons-material";

import { uploadFile } from "../../../service/api";

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  background-color: #ffffff;
  border-radius: 18px;
  width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;
`;

const ClipIcon = styled(AttachFile)`
  transform: rotate(40deg);
`;

const Footer = ({ sendText, value, setValue, file, setFile }) => {
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  };

  useEffect(() => {
    const getImage = async () => {
      if(file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        await uploadFile(data);
      }
    }
    getImage();
  },[file]);

  return (
    <Fragment>
      <Container>
        <EmojiEmotionsOutlined />
        <label htmlFor="fileInput">
          <ClipIcon />
        </label>
        <input
          id="fileInput"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => onFileChange(e)}
        />
        <Search>
          <InputField
            placeholder="Type a message"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={(e) => sendText(e)}
          />
        </Search>
        <Mic />
      </Container>
    </Fragment>
  );
};

export default Footer;
