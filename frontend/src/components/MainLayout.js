import React from "react";
import Header from "./Header";
import Footer from "./Footer";

/**
 * @author
 * @function MainLayout
 **/

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
