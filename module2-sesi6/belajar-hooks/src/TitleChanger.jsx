import { Container, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function TitleChanger() {
  const [title, setTitle] = useState("Purwadhika");

  // effect akan berjalan ketika render pertama kali saja
  useEffect(() => {
    alert("Welcome !");
  }, []);

  // effect akan berjalan ketika state title terdeteksi perubahan value.
  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <Container>
      <FormControl>
        <FormLabel>New Title</FormLabel>
        <Input value={title} onChange={handleInputChange} />
      </FormControl>
    </Container>
  );
}
