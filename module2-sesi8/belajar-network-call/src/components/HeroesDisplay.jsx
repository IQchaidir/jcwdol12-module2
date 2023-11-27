import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function HeroesDisplay() {
  const [heroes, setHeroes] = useState([]);
  const [formHero, setFormHero] = useState({ name: "", color: "" });
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchHeroes();
  }, []);

  const fetchHeroes = async () => {
    try {
      const res = await axios.get("http://localhost:3000/superheroes");
      setHeroes(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const setEditSelected = (id) => {
    setSelectedId(id);
    const [hero] = heroes.filter((hero) => hero.id === id);
    setFormHero({ name: hero.name, color: hero.color });
  };

  const handleSubmitHero = async (event) => {
    event.preventDefault();
    if (selectedId === null) {
      const res = await axios.post(
        "http://localhost:3000/superheroes",
        formHero
      );
      setHeroes((prev) => {
        return [...prev, res.data];
      });
    } else {
      const res = await axios.put(
        `http://localhost:3000/superheroes/${selectedId}`,
        formHero
      );
      setHeroes((prev) => {
        const indexEdited = prev.findIndex((hero) => hero.id === selectedId);
        const copyPrev = [...prev];
        copyPrev[indexEdited] = res.data;
        return copyPrev;
      });
    }
  };

  const deleteHero = async (id) => {
    if (!confirm("Are you sure to delete this hero ?")) {
      return;
    }

    await axios.delete(`http://localhost:3000/superheroes/${id}`);
    setHeroes((prev) => prev.filter((hero) => hero.id !== id));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormHero((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <Box mt={10}>
      <Heading>Heroes:</Heading>
      <UnorderedList>
        {heroes.map((hero) => (
          <ListItem key={hero.id}>
            <HStack>
              <Text w="full">
                {hero.name} ({hero.color})
              </Text>
              <Button onClick={() => setEditSelected(hero.id)}>Edit</Button>
              <Button onClick={() => deleteHero(hero.id)} colorScheme="red">
                Delete
              </Button>
            </HStack>
          </ListItem>
        ))}
      </UnorderedList>
      <Box mt={2} as="form" onSubmit={handleSubmitHero}>
        <FormControl>
          <FormLabel>Hero Name</FormLabel>
          <Input
            value={formHero.name}
            onChange={handleInputChange}
            name="name"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Color</FormLabel>
          <Input
            value={formHero.color}
            onChange={handleInputChange}
            name="color"
          />
        </FormControl>
        <Button type="submit" mt={2}>
          Submit
        </Button>
        {selectedId !== null && (
          <Button mt={2} ml={2} onClick={() => setSelectedId(null)}>
            Cancel Edit
          </Button>
        )}
      </Box>
    </Box>
  );
}
