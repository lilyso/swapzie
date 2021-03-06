import React from "react";
import Auth from "./../utils/auth";
import { Link as RouterLink } from "react-router-dom";
import {
  Tabs,
  TabList,
  Tab,
  Image,
  Center,
  Spacer,
  Box,
} from "@chakra-ui/react";
// When user is logged in show dashboard
function Nav() {
  if (Auth.loggedIn()) {
    return (
      <header>
        <Box w="100%" bgColor="#f7fff7">
          <Box m="auto" maxW="2400px">
            <Box
              display={{ base: "block", md: "flex", lg: "flex" }}
              align="center"
              p={4}
            >
              <Image
                h="100"
                src="./images/swapzie-logo-200.png"
                alt="swapzie logo"
              ></Image>
              <Spacer />
              <Center>
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
                      <a href="/" onClick={() => Auth.logout()}>
                        Logout
                      </a>
                    </Tab>
                  </TabList>
                </Tabs>
              </Center>
            </Box>
          </Box>
        </Box>
      </header>
    );
  } else {
    return (
      <header>
        <Box w="100%" bgColor="#f7fff7">
          <Box m="auto" maxW="2400px">
            <Box
              display={{ base: "block", md: "flex", lg: "flex" }}
              align="center"
              p={4}
            >
              <Image
                src="./images/swapzie-logo-200.png"
                alt="swapzie logo"
                h="100"
              ></Image>
              <Spacer />
              <Center>
                <Box>
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
                </Box>
              </Center>
            </Box>
          </Box>
        </Box>
      </header>
    );
  }
}

export default Nav;
