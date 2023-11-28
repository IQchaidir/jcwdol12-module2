import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axiosInstance from "../axios";
import * as Yup from "yup";
import { Form, Formik } from "formik";

export default function HeroesDisplay() {
  const [heroes, setHeroes] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchHeroes();
  }, []);

  const fetchHeroes = async () => {
    try {
      const res = await axiosInstance.get("/superheroes");
      setHeroes(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const setEditSelected = (id, formik) => {
    setSelectedId(id);
    const [hero] = heroes.filter((hero) => hero.id === id);
    formik.setFieldValue("name", hero.name);
    formik.setFieldValue("color", hero.color);
  };

  const handleSubmitHero = async (value, form) => {
    if (selectedId === null) {
      const res = await axiosInstance.post("/superheroes", value);
      setHeroes((prev) => {
        return [...prev, res.data];
      });
    } else {
      const res = await axiosInstance.put(`/superheroes/${selectedId}`, value);
      setHeroes((prev) => {
        const indexEdited = prev.findIndex((hero) => hero.id === selectedId);
        const copyPrev = [...prev];
        copyPrev[indexEdited] = res.data;
        return copyPrev;
      });
    }
    form.resetForm();
    setSelectedId(null);
  };

  const deleteHero = async (id) => {
    if (!confirm("Are you sure to delete this hero ?")) {
      return;
    }

    await axiosInstance.delete(`/superheroes/${id}`);
    setHeroes((prev) => prev.filter((hero) => hero.id !== id));
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Hero name cannot be empty!")
      .min(5, "Hero name must be longer than 5 characters"),
    color: Yup.string().required("Hero color cannot be empty"),
  });

  return (
    <Formik
      initialValues={{ name: "", color: "" }}
      onSubmit={handleSubmitHero}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <Box mt={10}>
          <Heading>Heroes:</Heading>
          <UnorderedList>
            {heroes.map((hero) => (
              <ListItem key={hero.id}>
                <HStack>
                  <Text w="full">
                    {hero.name} ({hero.color})
                  </Text>
                  <Button onClick={() => setEditSelected(hero.id, formikProps)}>
                    Edit
                  </Button>
                  <Button onClick={() => deleteHero(hero.id)} colorScheme="red">
                    Delete
                  </Button>
                </HStack>
              </ListItem>
            ))}
          </UnorderedList>
          <Form>
            <Box mt={2}>
              <FormControl
                isInvalid={formikProps.touched.name && formikProps.errors.name}
              >
                <FormLabel>Hero Name</FormLabel>
                <Input
                  value={formikProps.values.name}
                  onChange={formikProps.handleChange}
                  name="name"
                  placeholder="Hero name"
                />
                <FormErrorMessage>{formikProps.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  formikProps.touched.color && formikProps.errors.color
                }
              >
                <FormLabel>Color</FormLabel>
                <Input
                  value={formikProps.values.color}
                  onChange={formikProps.handleChange}
                  name="color"
                  placeholder="Hero color"
                />
                <FormErrorMessage>{formikProps.errors.color}</FormErrorMessage>
              </FormControl>
              <Button type="submit" mt={2}>
                Submit
              </Button>
              {selectedId !== null && (
                <Button
                  mt={2}
                  ml={2}
                  onClick={() => {
                    setSelectedId(null);
                    formikProps.resetForm();
                  }}
                >
                  Cancel Edit
                </Button>
              )}
            </Box>
          </Form>
        </Box>
      )}
    </Formik>
  );
}
