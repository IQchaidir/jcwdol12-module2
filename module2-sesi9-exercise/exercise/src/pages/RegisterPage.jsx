import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import YupPassword from "yup-password";
import axiosInstance from "../axios";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlices";
YupPassword(Yup);

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();

  const handleSubmit = async (value, form) => {
    try {
      const res = await axiosInstance.post("/users", value);
      dispatch(addUser(res.data));
      form.resetForm();
      toast({
        title: "User created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Something Wrong Happen",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("name can't be empty")
      .min(6, "name must be longer than 6 characters"),
    email: Yup.string()
      .required("email can't be empty")
      .email("email must be using valid format"),
    password: Yup.string()
      .required("Password can't be empty")
      .min(6, "Password must be longer than 6 characters")
      .minLowercase(1, "Password must contain 1 lowercase")
      .minUppercase(1, "Password must contain 1 uppercase")
      .minNumbers(1, "Password must contain 1 number")
      .minSymbols(1, "Password must contain 1 symbols"),
  });

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
                  <InputGroup>
                    <Input
                      variant="filled"
                      onChange={formikProps.handleChange}
                      value={formikProps.values.password}
                      name="password"
                      type={showPassword ? "text" : "password"}
                    />
                    <InputRightElement>
                      <Button
                        size="xs"
                        mr={2}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? "hide" : "show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
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
