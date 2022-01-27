import React from "react";
import About from "../components/About";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <RouterLink>
        <About />
      </RouterLink>
    </div>
  );
};

export default Home;
