import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Heading, Text, Wrap, Center } from "@chakra-ui/react";
import { QUERY_POSTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Post from "../components/Post";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  return (
    <>
      <Center>
        <Heading p={4}>Swap</Heading>
      </Center>
      <Box p={4}>
        <Wrap justify="center">
          {loading ? <Text>Loading...</Text> : <Post posts={posts} />}
        </Wrap>
      </Box>
    </>
  );
};

export default Dashboard;
