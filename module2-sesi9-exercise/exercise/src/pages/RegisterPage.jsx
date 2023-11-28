import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

export default function RegisterPage() {
  const handleSubmit = async (value, form) => {
    console.log(value);
    form.resetForm();
  };

  const validationSchema = Yup.object().shape({});

  return (
    <Container maxW="container.lg">
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <Form>
            <Center>
              <VStack
                width="md"
                borderRadius="md"
                py={7}
                px={5}
                bg="cyan.100"
                gap={5}
              >
                <Heading fontSize={"3xl"}>Page Register</Heading>
                <FormControl
                  isInvalid={
                    formikProps.touched.name && formikProps.errors.name
                  }
                >
                  <FormLabel>Name</FormLabel>
                  <Input
                    variant="filled"
                    onChange={formikProps.handleChange}
                    value={formikProps.values.name}
                    name="name"
                  />
                  <FormErrorMessage>{formikProps.errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    formikProps.touched.email && formikProps.errors.email
                  }
                >
                  <FormLabel>Email</FormLabel>
                  <Input
                    variant="filled"
                    onChange={formikProps.handleChange}
                    value={formikProps.values.email}
                    name="email"
                  />
                  <FormErrorMessage>
                    {formikProps.errors.email}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    formikProps.touched.password && formikProps.errors.password
                  }
                >
                  <FormLabel>Password</FormLabel>
                  <Input
                    variant="filled"
                    onChange={formikProps.handleChange}
                    value={formikProps.values.password}
                    name="password"
                    type="password"
                  />
                  <FormErrorMessage>
                    {formikProps.errors.password}
                  </FormErrorMessage>
                </FormControl>
                <Button type="submit">Submit</Button>
              </VStack>
            </Center>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
