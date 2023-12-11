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

  const submitHandler = () => {
    alert("yes working from");
  };
  return (
    <MainLayout>
      <section className=" container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className=" font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Sign up
          </h1>
          <from onSubmit={handleSubmit(submitHandler)}>
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
              {errors.name.message && (
                <p className=" text-red-500 mt-1 text-xs">
                  {errors.name.message}
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
                {...register("email")}
                placeholder="Enter email"
                className=" placeholder:text-[#5a7184] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
              />
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
                {...register("password")}
                placeholder="Enter password"
                className=" placeholder:text-[#5a7184] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
              />
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
                {...register("confirmPassword")}
                placeholder="Enter confirm Password"
                className=" placeholder:text-[#5a7184] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
              />
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
                className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6"
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
          </from>
        </div>
      </section>
    </MainLayout>
  );
};

export default RegisterPage;
