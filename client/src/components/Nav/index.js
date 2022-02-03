import React from "react";
import Auth from "../../utils/auth";
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

function Nav() {
  if (Auth.loggedIn()) {
    return (
      <header>
        <Box
          display={{ base: "block", md: "flex", lg: "flex" }}
          align="center"
          p={4}
          bgColor="#f7fff7"
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
      </header>
    );
  } else {
    return (
      <header>
        <Box
          display={{ base: "block", md: "flex", lg: "flex" }}
          align="center"
          p={4}
          bgColor="#f7fff7"
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
      </header>
    );
  }
}

export default Nav;
