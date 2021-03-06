import React, { useState, useEffect } from "react";
import { Box, Text, Wrap, Select, Center } from "@chakra-ui/react";
import { QUERY_POSTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Post from "../components/Post";
import { QUERY_CATEGORIES } from "../utils/queries";
import auth from "../utils/auth.js";

const Swap = () => {
  const categoryData = useQuery(QUERY_CATEGORIES);
  const categories = categoryData.data?.categories || [];
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const testLoggedIn = auth.loggedIn();
    setLoggedIn(testLoggedIn);
  }, []);

  return (
    <>
      <Wrap justify="center">
        <Select
          pt={4}
          minWidth="200px"
          maxWidth="300px"
          name="category"
          placeholder="Filter by Category"
        >
          {categories &&
            categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
        </Select>
        <Select
          pt={4}
          minWidth="200px"
          maxWidth="300px"
          name="age"
          placeholder="Filter by Age"
        >
          <option value="0-6m">0-6m</option>
          <option value="6-12m">6-12m</option>
          <option value="1-2yo">1-2yo</option>
          <option value="3-4yo">3-4yo</option>
          <option value="5-6yo">5-6yo</option>
          <option value="7-9yo">7-9yo</option>
          <option value="10-12yo">10-12yo</option>
        </Select>
      </Wrap>
      {!loggedIn && (
        <Center>
          <Text fontStyle="italic" mt={4} p={4}>
            Login or Sign up to start swapping!
          </Text>
        </Center>
      )}
      <Box p={4}>
        <Wrap justify="center">
          {loading ? <Text>Loading...</Text> : <Post posts={posts} />}
        </Wrap>
      </Box>
    </>
  );
};

export default Swap;
