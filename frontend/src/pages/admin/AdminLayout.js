import React from "react";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";

/**
 * @author
 * @function AdminLayout
 **/

const AdminLayout = (props) => {
  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <Header />
      {/* <div className="">AdminLayout</div> */}
      <main className=" bg-[#f9f9f9] flex-1 p-4 lg:p-6">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AdminLayout;
