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
import { QUERY_CATEGORIES, QUERY_USER_BY_ID } from "../utils/queries";
import { useQuery } from "@apollo/client";
import PostForm from "../components/PostForm";
import Auth from "../utils/auth";

const Dashboard = () => {
  const profile = Auth.getProfile();
  console.log(profile);
  const categoryData = useQuery(QUERY_CATEGORIES);
  const categories = categoryData.data?.categories || [];
  const { loading, error, data } = useQuery(QUERY_USER_BY_ID);
  const user = data?.user;
  console.log("userquery", user);
  return (
    <>
      <Center>
        <Heading p={4}>Dashboard</Heading>
      </Center>
      <Box>
        <PostForm categories={categories} user={user} />
      </Box>
    </>
  );
};

export default Dashboard;
