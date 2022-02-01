import React, { useState } from "react";
import { useMutation } from "@apollo/client";
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
  Text,
  Textarea,
  Select,
} from "@chakra-ui/react";
// import { Link as RouterLink } from "react-router-dom";
// import { NEW_POST } from "../utils/mutations";
// import Auth from "../utils/auth";

function newPost() {
  // const [formState, setFormState] = useState({
  //   title: "",
  //   description: "",
  //   image: "",
  //   category: "",
  //   location: "",
  // });
  // const [newPost, { error }] = useMutation(NEW_POST);
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const mutationResponse = await newPost({
  //       variables: {
  //         title: formState.title,
  //         description: formState.description,
  //       },
  //     });
  //     const token = mutationResponse.data.login.token;
  //     Auth.login(token);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  return (
    <>
      <Center>
        <Box mt={8}>
          <Text pb={4}>Create new post</Text>
          <form>
            {/* <form onSubmit={handleFormSubmit}> */}
            <FormControl>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                mb={4}
                name="title"
                type="title"
                id="title"
                // onChange={handleChange}
              />

              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea
                mb={4}
                placeholder="Write a detailed description"
                name="description"
                type="description"
                id="description"
                // onChange={handleChange}
              />
              {/* {error ? (
              <Text mb={4}>
                <p className="error-text">
                  The email or password you provided is incorrect
                </p>
              </Text>
            ) : null} */}
              <Select mb={4} placeholder="Select Category">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <FormLabel htmlFor="location">Location</FormLabel>
              <Input
                mb={4}
                name="location"
                type="tlocation"
                id="location"
                // onChange={handleChange}
              />
              <Button color="white" bgColor="#1a535c" mb={4} type="submit">
                Post
              </Button>
            </FormControl>
          </form>
        </Box>
      </Center>
    </>
  );
}

export default newPost;
