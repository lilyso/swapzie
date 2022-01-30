import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
// import { ADD_USER } from '../utils/mutations';
import {
  FormControl,
  FormLabel,
  Button,
  Box,
  Center,
  Input,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";

function Signup() {
  // function Signup(props) {
  //   const [formState, setFormState] = useState({ email: '', password: '' });
  //   const [addUser] = useMutation(ADD_USER);

  //   const handleFormSubmit = async (event) => {
  // event.preventDefault();
  //     const mutationResponse = await addUser({
  //       variables: {
  //         email: formState.email,
  //         password: formState.password,
  //         firstName: formState.firstName,
  //         lastName: formState.lastName,
  //       },
  //     });
  //     const token = mutationResponse.data.addUser.token;
  //     Auth.login(token);
  //   };

  //   const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormState({
  //       ...formState,
  //       [name]: value,
  //     });
  //   };

  return (
    <>
      <Center>
        <Box mt={8}>
          <Tabs defaultIndex={1} mb={4} variant="enclosed">
            <TabList>
              <Tab>
                <RouterLink to="/login">← Login</RouterLink>
              </Tab>

              <Tab>
                <h2>Signup</h2>
              </Tab>
            </TabList>
          </Tabs>
          <form>
            {/* <form onSubmit={handleFormSubmit}> */}
            <FormLabel htmlFor="firstName">First Name:</FormLabel>
            <Input
              mb={4}
              name="firstName"
              type="firstName"
              id="firstName"
              // onChange={handleChange}
            />
            <FormLabel htmlFor="lastName">Last Name:</FormLabel>
            <Input
              mb={4}
              name="lastName"
              type="lastName"
              id="lastName"
              // onChange={handleChange}
            />
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input
              mb={4}
              name="email"
              type="email"
              id="email"
              // onChange={handleChange}
            />
            <FormLabel htmlFor="pwd">Password:</FormLabel>
            <Input
              mb={4}
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              // onChange={handleChange}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Box>
      </Center>
    </>
  );
}

export default Signup;
