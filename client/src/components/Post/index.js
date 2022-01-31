import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Image, Box, Heading, Text, Flex, Center } from "@chakra-ui/react";

const Post = ({ posts }) => {
  return (
    <Box>
      {posts && posts.map((post) => <Text key={post._id}>{post.title}</Text>)}
    </Box>
  );
};

export default Post;
