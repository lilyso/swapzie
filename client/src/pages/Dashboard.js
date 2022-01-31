import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Image,
  Box,
  Heading,
  Text,
  Flex,
  Center,
  Button,
} from "@chakra-ui/react";
import { QUERY_POSTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Post from "../components/Post";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  return (
    <>
      <Center>
        <Heading p={4}>Dashboard</Heading>
      </Center>
      <Flex>{loading ? <Text>Loading...</Text> : <Post posts={posts} />}</Flex>
    </>
  );
};

export default Dashboard;
