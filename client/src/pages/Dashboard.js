import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Image,
  Box,
  Heading,
  Text,
  Flex,
  Center,
  Button,
} from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <div>
      <Center>
        <Heading p={4}>Dashboard</Heading>
      </Center>
      <Flex>
        <Box mx={4} p={4} borderWidth="1px" borderRadius="lg">
          POST
          <Center>
            <Button>BUTTON</Button>
          </Center>
        </Box>
        <Box mx={4} p={4} borderWidth="1px" borderRadius="lg">
          POST
          <Center>
            <Button>BUTTON</Button>
          </Center>
        </Box>
      </Flex>
    </div>
  );
};

export default Dashboard;
