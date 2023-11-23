import { Button, Container, Text } from "@chakra-ui/react";
import { useMemo, useState } from "react";

export default function DisplayOddEvenNumber() {
  const [number, setNumber] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const displayOddEven = useMemo(() => {
    for (let i = 0; i < 200; i++) {
      console.log("ini berat");
    }

    return number % 2 === 0 ? "Odd" : "Even";
  }, [number]);

  const handleIncrementNumber = () => {
    setNumber((prev) => prev + 1);
  };

  const handleAddClickCount = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <Container mt={5}>
      <Text>
        Current Number: {number} {displayOddEven}
      </Text>
      <Button onClick={handleIncrementNumber}>Increment Count</Button>
      <Text onClick={handleAddClickCount}>Click Counter: {clickCount}</Text>
    </Container>
  );
}
