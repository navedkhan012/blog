import React from "react";
import MainLayout from "../../components/MainLayout";
import Hero from "./container/Hero";
import Articles from "./container/Articles";
import CTA from "./container/CTA";

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
        <CTA />
      </MainLayout>
    </div>
  );
};

export default Home;
