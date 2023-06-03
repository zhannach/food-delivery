"use client";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-10 basis-1/4 h-1/3 border-slate-400 border-2 border-solid p-8 rounded-md"
      >
        <div className="mb-6">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-xl font-medium text-gray-900"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", {
                pattern: {
                  value: /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/,
                  message: "enter correct number",
                },
                required: true,
              })}
              className="bg-white text-gray-900 text-xl rounded-lg focus:border-blue-600 block w-full p-2.5"
            />
            {errors.name?.type && (
              <p className="text-red-600">Enter correct name</p>
            )}
          </div>
          <label
            htmlFor="email"
            className="block mb-2 text-xl font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            {...register("email", {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "enter correct number",
              },
              required: true,
            })}
            id="email"
            type="email"
            className="bg-gray-50 border border-gray-300 text-xl text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@gmail.com"
          />
          {errors.email?.type && (
            <p className="text-red-600">Enter correct email</p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Phone
          </label>
          <input
            {...register("phone", {
              pattern: {
                value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                message: "enter correct number",
              },
              required: true,
            })}
            id="phone"
            type="tel"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.phone?.type && (
            <p className="text-red-600">Enter correct phone, only number</p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="adress"
            className="block mb-2 text-xl font-medium text-gray-900"
          >
            Adress
          </label>
          <input
            id="adress"
            type="text"
            {...register("adress", {
              pattern: {
                value: /^[a-zA-Z0-9 ]{4,}$/,
                message: "enter correct number",
              },
              required: true,
            })}
            className="bg-white text-gray-900 text-xl rounded-lg focus:border-blue-600 block w-full p-2.5"
          />
          {errors.adress?.type && (
            <p className="text-red-600">Enter correct adress</p>
          )}
        </div>
        <button
          className="bg-blue-500 text-white font-bold text-xl h-10 self-end w-20 rounded-md hover:bg-slate-500"
          type="submit"
        >
          Save
        </button>
      </form>
    </>
  );
};

export default Form;
