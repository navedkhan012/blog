import React from "react";
import Header from "./components/header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/index/users";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

/**
 * @author
 * @function AdminLayout
 **/

const AdminLayout = (props) => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);

  const {
    data: profileData,
    isLoading: profileIsLoading,
    error: profileError,
  } = useQuery({
    queryFn: () => {
      return getUserProfile({
        token: userState.userInfo.token,
      });
    },
    queryKey: ["profile"],
    onSuccess: (data) => {
      if (!data?.admin) {
        navigate("/");
        toast.error("your not allow to access admin panel");
      }
    },
    onError: (err) => {
      console.log("err", err);
      navigate("/");
      toast.error("your not allow to access admin panel");
    },
  });

  if (profileIsLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h3>loading...</h3>
      </div>
    );
  }
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
