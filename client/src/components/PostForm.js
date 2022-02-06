import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  FormControl,
  FormLabel,
  Button,
  Box,
  Input,
  Text,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { NEW_POST } from "./../utils/mutations";
import { QUERY_USER_BY_ID } from "./../utils/queries";
import Auth from "./../utils/auth";
import Upload from "./cloud/Upload";

const INITIAL_FORM_STATE = {
  title: "",
  description: "",
  image: null,
  age: "",
  category: "",
  location: "",
};

// Create new post form
const NewPost = ({ categories }) => {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  const [newPost, { error }] = useMutation(NEW_POST, {
    refetchQueries: [{ query: QUERY_USER_BY_ID }],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = Auth.getProfile();
      const mutationResponse = await newPost({
        variables: {
          title: formState.title,
          description: formState.description,
          image: formState.image,
          age: formState.age,
          category: formState.category,
          location: formState.location,
          user: user.data._id,
        },
      });
      // Reset form
      setFormState(INITIAL_FORM_STATE);
    } catch (error) {
      console.log(error);
    }
  };

  // Get user data and set form state
  const getUser = async () => {
    const profile = await Auth.getProfile();
    setFormState({
      ...formState,
      user: profile.data._id,
    });
    return;
  };
  // Set form state when input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // SEt form state for uploaded image
  const updateUpload = (event) => {
    let imageUpload = event;
    setFormState({
      ...formState,
      image: imageUpload,
    });
  };

  return (
    <>
      <Box mt={4}>
        <Text p={4}>Create new post:</Text>
        <form onSubmit={handleFormSubmit}>
          <FormControl>
            <Upload
              name="image"
              defaultImage={formState.image}
              onChange={updateUpload}
            />
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              mb={4}
              value={formState && formState.title}
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
              value={formState && formState.description}
              type="description"
              id="description"
              onChange={handleChange}
            />
            <Select
              onChange={handleChange}
              name="age"
              value={formState && formState.age}
              mb={4}
              placeholder="Select Age"
            >
              <option value="0-6m">0-6m</option>
              <option value="6-12m">6-12m</option>
              <option value="1-2yo">1-2yo</option>
              <option value="3-4yo">3-4yo</option>
              <option value="5-6yo">5-6yo</option>
              <option value="7-9yo">7-9yo</option>
              <option value="10-12yo">10-12yo</option>
            </Select>
            <Select
              onChange={handleChange}
              name="category"
              value={formState && formState.category}
              mb={4}
              placeholder="Select Category"
            >
              {categories &&
                categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
            </Select>
            <FormLabel htmlFor="location">Location</FormLabel>
            <Input
              mb={4}
              name="location"
              type="location"
              value={formState && formState.location}
              id="location"
              onChange={handleChange}
            />
            <Button color="white" bgColor="#1a535c" mb={4} type="submit">
              Post
            </Button>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default NewPost;
