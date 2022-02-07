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
                Big changes start small. At Swapzie, we know how easy it is to
                accumlate stuff and things! Kids grow up so fast and are in
                constant need of new clothes, learning tools and toys. But that
                comes at a cost. Australians throw away millions of toys and
                spend billions on new toys every year. Join the movement to
                reduce and reuse. Whether you're a thrifty parent or looking to
                reduce your environmental impact, Swapzie offers a
                family-friendly platform to swap or donate well-loved toys.
              </Text>
              <Text px={8} pb={4}>
                Teach your kids the importance of reducing waste, reusing and
                recycling by swapping instead of buying new. Together we can
                make a small change in your lifestyle for a greater impact. Help
                ensure the future of the planet for our kids and inspire play
                time for the next generation.
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
                the chosen person from your dashboard. Once they have claimed
                the toys, organise to swap in person.
              </Text>
            </Box>
          </Center>
        </Box>
      </RouterLink>
    </div>
  );
};

export default Home;
