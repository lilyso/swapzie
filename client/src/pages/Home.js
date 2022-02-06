import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Image, Box, Heading, Text, Flex, Center } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <RouterLink to="/">
        <Box>
          <Center>
            <Image
              src="images/hulki-okan-tabak-gfF7f-hriJU-unsplash.png"
              alt="feature image of happy girl with toy"
            ></Image>
          </Center>
          <Center>
            <Heading color="#1a535c" m={4} p={4}>
              Give toys a second life, inspire a new beginning!
            </Heading>
          </Center>
          <Center>
            <Box maxW="2400px">
              <Text px={8} pb={4}>
                Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet
                nisl tempus convallis quis ac lectus. Curabitur non nulla sit
                amet nisl tempus convallis quis ac lectus. Curabitur arcu erat,
                accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut
                libero malesuada feugiat. Curabitur arcu erat, accumsan id
                imperdiet et, porttitor at sem. Vivamus suscipit tortor eget
                felis porttitor volutpat. Vestibulum ac diam sit amet quam
                vehicula elementum sed sit amet dui. Pellentesque in ipsum id
                orci porta dapibus. Donec sollicitudin molestie malesuada.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque, auctor sit amet
                aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut
                libero malesuada feugiat. Pellentesque in ipsum id orci porta
                dapibus.
              </Text>
              <Text px={8} pb={4}>
                Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet
                nisl tempus convallis quis ac lectus. Curabitur non nulla sit
                amet nisl tempus convallis quis ac lectus. Curabitur arcu erat,
                accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut
                libero malesuada feugiat. Curabitur arcu erat, accumsan id
                imperdiet et, porttitor at sem. Vivamus suscipit tortor eget
                felis porttitor volutpat. Vestibulum ac diam sit amet quam
                vehicula elementum sed sit amet dui. Pellentesque in ipsum id
                orci porta dapibus. Donec sollicitudin molestie malesuada.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque, auctor sit amet
                aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut
                libero malesuada feugiat. Pellentesque in ipsum id orci porta
                dapibus.
              </Text>
            </Box>
          </Center>
          <Center>
            <Heading color="#1a535c" p={4}>
              How it works
            </Heading>
          </Center>
          <Center>
            <Box
              maxW="2400px"
              mx={4}
              display={{ base: "block", md: "flex", lg: "flex" }}
            >
              <Text p={4}>
                1. Box your toys by age. Make sure they are clean and not broken
                - just like how you would like to receive them.
              </Text>
              <Text p={4}>
                2. Create a post from your dashboard. Make sure to give a good
                description of the toy and what you would like to swap it for.
              </Text>
              <Text p={4}>
                3. Once you find the perfect swap or donation, offer the swap to
                the user from your dashboard. Once the user has claimed the
                toys, organise to swap in person.
              </Text>
            </Box>
          </Center>
        </Box>
      </RouterLink>
    </div>
  );
};

export default Home;
