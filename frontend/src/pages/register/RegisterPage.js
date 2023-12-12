import React from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../../components/MainLayout";
import { Link } from "react-router-dom";

/**
 * @author
 * @function RegisterPage
 **/

const RegisterPage = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {
    console.log("data", data);
  };
  const password = watch("password");
  return (
    <MainLayout>
      <section className=" container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className=" font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Sign up
          </h1>
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
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="confirmPassword"
                className=" text-[#5a7184] font-semibold block"
              >
                confirm Password
              </label>
              <input
                type="text"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "confirm is required",
                  },
                  validate: (value) => {
                    if (value !== password) {
                      return "password do not match";
                    }
                  },
                })}
                placeholder="Enter confirm Password"
                className=" placeholder:text-[#5a7184] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
              />
              {errors.confirmPassword?.message && (
                <p className=" text-red-500 mt-1 text-xs">
                  {errors.confirmPassword?.message}
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
                disabled={!isValid}
                className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                Register
              </button>
              <p className=" text-sm font-semibold text-gray-400">
                You have an account ?
                <Link
                  to="/login"
                  className=" text-sm font-semibold text-primary ml-2"
                >
                  Login now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default RegisterPage;
