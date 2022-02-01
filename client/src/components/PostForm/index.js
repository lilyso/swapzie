import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  FormControl,
  FormLabel,
  Button,
  Box,
  Center,
  Input,
  Text,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { NEW_POST } from "../../utils/mutations";
import Auth from "../../utils/auth";

const NewPost = ({ categories }) => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    location: "",
  });
  const [newPost, { error }] = useMutation(NEW_POST);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const profile = Auth.getProfile();
    console.log("profile", profile);
    try {
      const mutationResponse = await newPost({
        variables: {
          title: formState.title,
          description: formState.description,
          image: formState.image,
          category: formState.category,
          location: formState.location,
          user: profile.data._id,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value, formState, {
      ...formState,
      [name]: value,
    });
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Center>
        <Box mt={8}>
          <Text pb={4}>Create new post</Text>
          <form onSubmit={handleFormSubmit}>
            <FormControl>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                mb={4}
                name="title"
                type="title"
                id="title"
                onChange={handleChange}
              />

              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea
                mb={4}
                placeholder="Write a detailed description"
                name="description"
                type="description"
                id="description"
                onChange={handleChange}
              />
              {/* {error ? (
              <Text mb={4}>
                <p className="error-text">
                  The email or password you provided is incorrect
                </p>
              </Text>
            ) : null} */}
              <Select
                onChange={handleChange}
                name="category"
                mb={4}
                placeholder="Select Category"
              >
                {categories &&
                  categories.map((category) => (
                    <option key={category._id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
              </Select>
              <FormLabel htmlFor="location">Location</FormLabel>
              <Input
                mb={4}
                name="location"
                type="location"
                id="location"
                onChange={handleChange}
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
};

export default NewPost;
