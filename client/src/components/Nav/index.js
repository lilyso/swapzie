import React from "react";
import Auth from "../../utils/auth";
import { Link as RouterLink } from "react-router-dom";
import { Tabs, TabList, Tab, Image, Flex, Spacer, Box } from "@chakra-ui/react";

function Nav() {
  return (
    <header>
      <Box p={4} bgColor="#f7fff7">
        <Flex>
          <Image
            src="./images/swapzie-logo-200.png"
            alt="swapzie logo"
            h="100"
          ></Image>
          <Spacer />
          <Tabs color="#1a535c" variant="unstyled" pt={8}>
            <TabList>
              <Tab>
                <RouterLink to="/">About</RouterLink>
              </Tab>
              <Tab>
                <RouterLink to="/">Swap</RouterLink>
              </Tab>
              <Tab>
                <RouterLink to="/">Dashboard</RouterLink>
              </Tab>
              <Tab>
                <RouterLink to="/">Login</RouterLink>
              </Tab>
              <Tab>
                <RouterLink to="/">Sign Up</RouterLink>
              </Tab>
            </TabList>
          </Tabs>
        </Flex>
      </Box>
    </header>
  );
}

export default Nav;