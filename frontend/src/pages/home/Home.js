import React from "react";
import MainLayout from "../../components/MainLayout";
import Hero from "./container/Hero";

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <div>
      <MainLayout>
        <Hero></Hero>
      </MainLayout>
    </div>
  );
};

export default Home;
