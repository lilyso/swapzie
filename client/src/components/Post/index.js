import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Image, Box, Heading, Text, Button, Center } from "@chakra-ui/react";

const Post = ({ posts }) => {
  console.log({ posts });
  return (
    <>
      {posts &&
        posts.map((post) => (
          <Box
            borderRadius={20}
            border="1px"
            w={{ base: "100%", md: "33%", lg: "25%" }}
            p={4}
            key={post._id}
          >
            <Heading size="sm">{post.title}</Heading>
            <Text>{post.location}</Text>
            <Text py={4}>{post.description}</Text>
            {/* <Text>Posted by {post.user.firstName} on 31/2/21</Text> */}
            <Text>{post.category.name}</Text>
            <Center>
              <Button>Swap</Button>
            </Center>
          </Box>
        ))}
    </>
  );
};

export default Post;
