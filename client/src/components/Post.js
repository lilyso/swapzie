import React from "react";
import { Image, Box, Heading, Text, Button, Center } from "@chakra-ui/react";
import getDate from "../utils/date.js";
import PostExpand from "./modals/ModalSwap";
// Post render on Swap page
const Post = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post) => (
          <Box
            borderColor="#1a535c"
            borderRadius={20}
            border="1px"
            w={{ base: "100%", md: "33%", lg: "25%" }}
            p={4}
            key={post._id}
          >
            <Box minH="400">
              {post.image ? (
                <Center>
                  <Image
                    boxSize={200}
                    objectFit="cover"
                    borderRadius={10}
                    mb={4}
                    src={post.image}
                  />
                </Center>
              ) : (
                <Center>
                  <Image
                    boxSize={200}
                    objectFit="cover"
                    borderRadius={10}
                    mb={4}
                    src="./images/no-image.png"
                  />
                </Center>
              )}
              <Heading h="50px" size="md">
                {post.title}
              </Heading>
              <Text>
                {post.location}, {post.category.name}, {post.age}
              </Text>
              <Text h={120} py={4}>
                {post.description}
              </Text>
              <Text fontSize="sm" pb={4}>
                Posted by {post.user.firstName} on{"  "}
                {getDate(post.created_at / 1000)}
              </Text>
            </Box>
            <Center>
              <PostExpand post={post} />
            </Center>
          </Box>
        ))}
    </>
  );
};

export default Post;
