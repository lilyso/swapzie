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
  Image,
  Heading,
} from "@chakra-ui/react";
import { NEW_POST } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Upload from "../Cloudinary/Upload";
import getDate from "../../utils/date.js";

const NewPost = ({ categories, user }) => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    image: "",
    age: "",
    category: "",
    location: "",
    user: "",
  });

  const [newPost, { error }] = useMutation(NEW_POST);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
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
    } catch (e) {
      console.log(e);
    }
  };

  const getUser = async () => {
    const profile = await Auth.getProfile();
    setFormState(
      {
        ...formState,
        user: profile.data._id,
      },
      console.log({ ...formState, user: profile.data._id })
    );
    return;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log({
      ...formState,
      [name]: value,
    });
  };

  const updateUpload = (event) => {
    let imageUpload = event;
    console.log("event", event);
    setFormState({
      ...formState,
      image: imageUpload,
    });
    console.log({
      ...formState,
      image: imageUpload,
    });
  };

  return (
    <>
      <Center>
        <Box mt={8}>
          <Text pb={4}>Create new post:</Text>
          <form onSubmit={handleFormSubmit}>
            <FormControl>
              <Upload name="image" onChange={updateUpload} />
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
                name="age"
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
                id="location"
                onChange={handleChange}
              />
              <Button color="white" bgColor="#1a535c" mb={4} type="submit">
                Post
              </Button>
            </FormControl>
          </form>
        </Box>
        <Box m={4} p={4} border="1px">
          {user && user.posts.length ? (
            user.posts.map((post) => (
              <Box key={post._id}>
                <Image
                  objectFit="cover"
                  boxSize="200px"
                  src={post.image}
                  alt="post feature"
                />
                <Heading size="md">{post.title}</Heading>
                <Text>
                  {post.location}, {post.category.name}, {post.age}
                </Text>
                <Text>{post.description}</Text>
                <Text>{getDate(post.created_at / 1000)}</Text>
              </Box>
            ))
          ) : (
            <Box>{error}</Box>
          )}
        </Box>
      </Center>
    </>
  );
};

export default NewPost;
