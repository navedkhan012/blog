import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../../components/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/index/users";
import ProfilePicture from "../../components/ProfilePicture";

/**
 * @author
 * @function ProfilePage
 **/

const ProfilePage = (props) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();
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
  });

  useEffect(() => {
    if (!userState.userInfo) navigate("/");
  }, [navigate, userState.userInfo]);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    values: {
      name: profileIsLoading ? "" : profileData.name,
      email: profileIsLoading ? "" : profileData.email,
    },
    mode: "onChange",
  });

  console.log("profileData", profileData);
  const submitHandler = (data) => {};
  return (
    <MainLayout>
      <section className=" container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className=" font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Profile
          </h1>
          <div className=" relative">
            <ProfilePicture avatar={profileData?.avatar} />
          </div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className=" text-[#5a7184] font-semibold block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  minLength: {
                    value: 1,
                    message: "name length must be at least 1 character",
                  },
                  required: {
                    value: true,
                    message: "name is required",
                  },
                })}
                placeholder="Enter name"
                className=" placeholder:text-[#5a7184] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
              />
              {errors.name?.message && (
                <p className=" text-red-500 mt-1 text-xs">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className=" text-[#5a7184] font-semibold block"
              >
                email
              </label>
              <input
                type="text"
                id="email"
                {...register("email", {
                  pattern: {
                    value:
                      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                    message: " email needed",
                  },
                  required: {
                    value: true,
                    message: "email is required",
                  },
                })}
                placeholder="Enter email"
                className=" placeholder:text-[#5a7184] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
              />
              {errors.email?.message && (
                <p className=" text-red-500 mt-1 text-xs">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className=" text-[#5a7184] font-semibold block"
              >
                password
              </label>
              <input
                type="text"
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "must be 6 chracter",
                  },
                })}
                placeholder="Enter password"
                className=" placeholder:text-[#5a7184] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
              />
              {errors.password?.message && (
                <p className=" text-red-500 mt-1 text-xs">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <div>
              <Link
                to="/forget-password"
                className=" text-sm font-semibold text-primary"
              >
                Forgot password?
              </Link>
              <button
                type="submit"
                disabled={!isValid || profileIsLoading}
                className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProfilePage;
