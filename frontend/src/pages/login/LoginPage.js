import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../../components/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/index/users";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../store/reducers/userReducers";

/**
 * @author
 * @function LoginPage
 **/

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => {
      return login({ email, password });
    },
    onSuccess: (data) => {
      console.log("data from DB", data);
      dispatch(userAction.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (userState.userInfo) navigate("/");
  }, [navigate, userState.userInfo]);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { email, password } = data;
    mutate({ email, password });
  };
  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Sign In
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
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
                disabled={!isValid || isLoading}
                className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                Sing In
              </button>
              <p className=" text-sm font-semibold text-gray-400">
                Do not have account ?
                <Link
                  to="/register"
                  className=" text-sm font-semibold text-primary ml-2"
                >
                  Register now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default LoginPage;
