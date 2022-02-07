import React from "react";
import { Box, Heading, Center, Wrap } from "@chakra-ui/react";
import { QUERY_CATEGORIES, QUERY_USER_BY_ID } from "../utils/queries";
import { useQuery } from "@apollo/client";
import PostForm from "../components/PostForm";
import UserPosts from "../components/DashboardPost";

const Dashboard = () => {
  const categoryData = useQuery(QUERY_CATEGORIES);
  const categories = categoryData.data?.categories || [];
  const { loading, error, data } = useQuery(QUERY_USER_BY_ID);
  const user = data?.user;
  return (
    <>
      <Center>
        {user && <Heading p={4}>Welcome back, {user.firstName}</Heading>}
      </Center>
      {/* <Center> */}
      <Box>
        <Wrap justify="center">
          <PostForm categories={categories} />
          {user && <UserPosts user={user} categories={categories} />}
        </Wrap>
      </Box>
      {/* </Center> */}
    </>
  );
};

export default Dashboard;
