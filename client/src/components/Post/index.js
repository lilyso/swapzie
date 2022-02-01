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
            {post.image ? (
              <Image mb={4} src="post.image" />
            ) : (
              <Image mb={4} src="./images/no-image.png" />
            )}
            <Heading h="50px" size="md">
              {post.title}
            </Heading>
            <Text>
              {post.location}, {post.category.name}
            </Text>
            <Text h={120} py={4}>
              {post.description}
            </Text>
            {/* <Text>Posted by {post.user.firstName} on 31/2/21</Text> */}
            <Center>
              <Button color="white" bgColor="#1a535c" data-id={post._id}>
                Swap
              </Button>
            </Center>
          </Box>
        ))}
    </>
  );
};

export default Post;
