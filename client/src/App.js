import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Swap from "./pages/Swap";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<Home />} />
            <Route exact path="/swap" element={<Swap />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
