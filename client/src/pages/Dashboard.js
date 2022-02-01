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
// import { QUERY_POSTS } from "../utils/queries";
// import { useQuery } from "@apollo/client";
import PostForm from "../components/PostForm";

const Dashboard = () => {
  // const { loading, data } = useQuery(QUERY_POSTS);
  // const posts = data?.posts || [];
  return (
    <>
      <Center>
        <Heading p={4}>Dashboard</Heading>
      </Center>
      <Box>
        <PostForm />
      </Box>
    </>
  );
};

export default Dashboard;
