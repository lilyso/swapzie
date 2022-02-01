import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Image, Box, Heading, Text, Flex, Center } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <RouterLink to="/">
        <Box>
          <Image
            src="images/hulki-okan-tabak-gfF7f-hriJU-unsplash.png"
            alt="feature image of happy girl with toy"
          ></Image>
          <Center>
            <Heading color="#1a535c" m={4} p={4}>
              Give toys a second life, inspire a new beginning!
            </Heading>
          </Center>
          <Text px={8} pb={4}>
            Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet
            nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet
            nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan
            id imperdiet et, porttitor at sem. Nulla quis lorem ut libero
            malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et,
            porttitor at sem. Vivamus suscipit tortor eget felis porttitor
            volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed
            sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec
            sollicitudin molestie malesuada. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
            neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
            Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum
            id orci porta dapibus.
          </Text>
          <Text px={8} pb={4}>
            Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet
            nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet
            nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan
            id imperdiet et, porttitor at sem. Nulla quis lorem ut libero
            malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et,
            porttitor at sem. Vivamus suscipit tortor eget felis porttitor
            volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed
            sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec
            sollicitudin molestie malesuada. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
            neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
            Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum
            id orci porta dapibus.
          </Text>
          <Center>
            <Heading color="#1a535c" p={4}>
              How it works
            </Heading>
          </Center>
          <Box mx={4} display={{ base: "block", md: "flex", lg: "flex" }}>
            <Text p={4}>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum
              ac diam sit amet quam vehicula elementum sed sit amet dui.
              Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin
              molestie malesuada.
            </Text>
            <Text p={4}>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum
              ac diam sit amet quam vehicula elementum sed sit amet dui.
              Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin
              molestie malesuada.
            </Text>
            <Text p={4}>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum
              ac diam sit amet quam vehicula elementum sed sit amet dui.
              Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin
              molestie malesuada.
            </Text>
          </Box>
        </Box>
      </RouterLink>
    </div>
  );
};

export default Home;
