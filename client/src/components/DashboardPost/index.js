import React from "react";
import { Box, Center, Text, Image, Heading } from "@chakra-ui/react";
import getDate from "../../utils/date.js";

const UserPosts = ({ user }) => {
  return (
    <Box px={4}>
      <Text p={4}>Your Posts</Text>
      {user && user.posts.length ? (
        user.posts.map((post) => (
          <Box
            maxW="300"
            mb={4}
            borderColor="#1a535c"
            borderRadius={20}
            border="1px"
            p={4}
            key={post._id}
          >
            <Center>
              {post.image ? (
                <Image
                  pb={4}
                  maxH={200}
                  objectFit="cover"
                  borderRadius={10}
                  src={post.image}
                  alt="post feature"
                />
              ) : (
                <Image mb={4} src="./images/no-image.png" />
              )}
            </Center>
            <Heading size="md">{post.title}</Heading>
            <Text>
              {post.location}, {post.category.name}, {post.age}
            </Text>
            <Text>{post.description}</Text>
            <Text>{getDate(post.created_at / 1000)}</Text>
          </Box>
        ))
      ) : (
        <Box p={4}>
          <Text fontStyle="italic" p={4}>
            Create a new post today!
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default UserPosts;
