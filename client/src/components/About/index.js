import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Image, Box, Heading, Text } from "@chakra-ui/react";

function About() {
  return (
    <Box>
      <Image
        src="images/hulki-okan-tabak-gfF7f-hriJU-unsplash.png"
        alt="feature image of happy girl with toy"
      ></Image>
      <Heading color="#1a535c" mt={4} p={4}>
        Give toys a second life, inspire a new beginning!
      </Heading>
      <Text px={8} py={4}>
        Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl
        tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl
        tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
        imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada
        feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
        sem. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum
        ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque
        in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
        ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada
        feugiat. Pellentesque in ipsum id orci porta dapibus.
      </Text>
      <Text px={8} py={4}>
        Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl
        tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl
        tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
        imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada
        feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
        sem. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum
        ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque
        in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
        ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada
        feugiat. Pellentesque in ipsum id orci porta dapibus.
      </Text>
    </Box>
  );
}

export default About;
