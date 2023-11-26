/** @format */

import { useState } from "react";
import HeadingComponent from "./heading";
import { Box, Button, Stack } from "@chakra-ui/react";
import InputComponent from "./input";

function BodyComponent() {
  const [content, setContent] = useState("ini adalah content");
  const saveToLocalStorage = () => localStorage.setItem("content", content);
  const saveToSessionStorage = () => sessionStorage.setItem("content", content);

  return (
    <Stack>
      <HeadingComponent value={content} ayam={"ayam goreng"} />
      <Box>{content}</Box>
      <InputComponent set={setContent} />
      <Button onClick={saveToLocalStorage}>save to local Storage</Button>
      <Button onClick={() => alert(localStorage.getItem("content"))}>
        get From local Storage
      </Button>
      <Button onClick={saveToSessionStorage}>save to session Storage</Button>
    </Stack>
  );
}
export default BodyComponent;

// object => key => prop/method
// component => prop
// panggil nama component
// parameter dalam function component akan menangkap sebuah props

//rules untuk passing value lewat props
//hanya bisa apabila component yang dikirim adalah
//children dari component yang mengirim
