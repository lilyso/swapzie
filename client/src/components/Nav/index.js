import React from "react";
import Auth from "../../utils/auth";
import { Link as RouterLink } from "react-router-dom";
import { Tabs, TabList, Tab, Image, Flex, Spacer, Box } from "@chakra-ui/react";

function Nav() {
  if (Auth.loggedIn()) {
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
                  <RouterLink to="/about">About</RouterLink>
                </Tab>
                <Tab>
                  <RouterLink to="/swap">Swap</RouterLink>
                </Tab>
                <Tab>
                  <RouterLink to="/dashboard">Dashboard</RouterLink>
                </Tab>
                <Tab>
                  <RouterLink to="/login">Login/Sign Up</RouterLink>
                </Tab>
                <Tab>
                  <a href="/" onClick={() => Auth.logout()}>
                    Logout
                  </a>
                </Tab>
              </TabList>
            </Tabs>
          </Flex>
        </Box>
      </header>
    );
  } else {
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
                  <RouterLink to="/about">About</RouterLink>
                </Tab>
                <Tab>
                  <RouterLink to="/swap">Swap</RouterLink>
                </Tab>
                <Tab>
                  <RouterLink to="/login">Login/Sign Up</RouterLink>
                </Tab>
              </TabList>
            </Tabs>
          </Flex>
        </Box>
      </header>
    );
  }
}

export default Nav;
