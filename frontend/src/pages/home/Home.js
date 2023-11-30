import React from "react";
import MainLayout from "../../components/MainLayout";
import Hero from "./container/Hero";
import Articles from "./container/Articles";

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <div>
      <MainLayout>
        <Hero></Hero>
        <Articles />
      </MainLayout>
    </div>
  );
};

export default Home;
