import React from "react";
import {
  Box,
  Heading,
  Text,
  Wrap,
  Center,
  Select,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { QUERY_POSTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Post from "../components/Post";
import { QUERY_CATEGORIES } from "../utils/queries";

const Swap = () => {
  const categoryData = useQuery(QUERY_CATEGORIES);
  const categories = categoryData.data?.categories || [];
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <>
      <Center>
        <Heading p={4}>Swap</Heading>
      </Center>
      <Center>
        <Flex>
          <Text minWidth="100px" p={4}>
            Filter by:
          </Text>
          <Spacer />
          <Select
            mx={4}
            minWidth="200px"
            // onChange={handleChange}
            name="category"
            placeholder="Select Category"
          >
            {categories &&
              categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
          </Select>
          <Spacer />
          <Select
            minWidth="200px"
            // onChange={handleChange}
            name="age"
            // value={formState && formState.age}
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
        </Flex>
      </Center>
      <Box p={4}>
        <Wrap justify="center">
          {loading ? <Text>Loading...</Text> : <Post posts={posts} />}
        </Wrap>
      </Box>
    </>
  );
};

export default Swap;
