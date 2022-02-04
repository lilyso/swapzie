import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Image,
  Box,
  Heading,
  Text,
  Flex,
  Center,
  Wrap,
} from "@chakra-ui/react";
import { QUERY_CATEGORIES, QUERY_USER_BY_ID } from "../utils/queries";
import { useQuery } from "@apollo/client";
import PostForm from "../components/PostForm";
import UserPosts from "../components/DashboardPost";
import Auth from "../utils/auth";

const Dashboard = () => {
  const categoryData = useQuery(QUERY_CATEGORIES);
  const categories = categoryData.data?.categories || [];
  const { loading, error, data } = useQuery(QUERY_USER_BY_ID);
  const user = data?.user;
  console.log("userquery", user);
  return (
    <>
      <Center>
        {user && <Heading p={4}>Welcome back, {user.firstName}</Heading>}
      </Center>
      {/* <Center> */}
      <Box>
        <Wrap justify="center">
          <PostForm categories={categories} />
          {user && <UserPosts user={user} />}
        </Wrap>
      </Box>
      {/* </Center> */}
    </>
  );
};

export default Dashboard;
