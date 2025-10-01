"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FormEvent, useState } from "react";

interface IFormData {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  // mode: string;
}
interface IError {
  name: string;
  message: string;
}
const Page = () => {
  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
  });
  const [errors, setErrors] = useState<IError[]>([]);
  function validateField(fieldName: string, value): boolean {
    if (!(fieldName === "first-name" && value.length > 1)) {
      setErrors((prev) => [
        ...prev,
        {
          name: "first-name",
          message: "Minimum length is 2 characters",
        },
      ]);
      return false;
    } else {
      setErrors((prev) => prev.filter((error) => error.name !== "first-name"));
    }
    if (!(fieldName === "last-name" && value.length > 1)) {
      setErrors((prev) => [
        ...prev,
        {
          name: "last-name",
          message: "Minimum length is 2 characters",
        },
      ]);
      return false;
    } else {
      setErrors((prev) => prev.filter((error) => error.name !== "last-name"));
    }
    return true;
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validateField(fieldName, e.currentTarget.value);
    const form = e.currentTarget.closest("form");
    if (!form) return;
    const formData = new FormData(form);
    const firstName = formData.get("first-name") as string;
    const lastName = formData.get("last-name") as string;
    const age = formData.get("age") as string;
    const email = formData.get("email") as string;

    // const { firstName, lastName, age, email } = formData;
    setFormData({ firstName, lastName, age: Number(age), email });
    console.log(formData);
  };
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit: SubmitHandler<FieldValues> = (e: FieldValues) => {};
  if (!formData)
    return (
      <div className="uppercase text-red-500 font-extrabold text-6xl  min-h-screen">
        Failed to get formdata
      </div>
    );
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        action=""
        className="flex flex-col gap-4 bg-gray-900 min-h-[70vh] w-[90%] md:w-[60%] rounded-xl p-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
          Fill in the details below
        </h2>
        <label htmlFor="" className="flex flex-col gap-2 relative">
          <span className="font-semibold">First Name</span>
          {errors && (
            <span className="absolute right-0 italic text-red-500">
              {errors.find((error) => error.name == "first-name")?.message}
            </span>
          )}
          <input
            // {...register("name", {
            //   required: "Please input your name",
            //   minLength: { value: 2, message: "Minimum 2 characters" },
            // })}
            type="text"
            value={formData.firstName}
            name="first-name"
            placeholder="e.g. John"
            onChange={(e) => {
              validateField("first-name", e.target.value);

              setFormData((prev) => ({ ...prev, firstName: e.target.value }));
            }}
            className="border border-gray-300 p-3 rounded-md"
          />
        </label>
        <label htmlFor="" className="flex flex-col gap-2 relative">
          <span className="font-semibold">Last Name</span>
          {errors && (
            <span className="absolute right-0 italic text-red-500">
              {errors.find((error) => error.name == "last-name")?.message}
            </span>
          )}
          <input
            // {...register("name", {
            //   required: "Please input your name",
            //   minLength: { value: 2, message: "Minimum 2 characters" },
            // })}
            type="text"
            name="last-name"
            value={formData.lastName}
            placeholder="e.g. Doe"
            onChange={(e) => {
              validateField("last-name", e.target.value);
              setFormData((prev) => ({ ...prev, name: e.target.value }));
            }}
            className="border border-gray-300 p-3 rounded-md"
          />
        </label>
        <label htmlFor="" className="flex flex-col gap-2">
          <span className="font-semibold">Age</span>
          <input
            type="number"
            className="border border-gray-300 p-3 rounded-md"
            name="age"
            value={formData.age === 0 ? " " : formData.age}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, age: Number(e.target.value) }));
            }}
          />
        </label>
        <label htmlFor="" className="flex flex-col gap-2">
          <span className="font-semibold">Email</span>
          <input
            type="email"
            name="email"
            className="border border-gray-300 p-3 rounded-md"
            value={formData.email}
            placeholder="e.g. johndoe@email.com"
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
        </label>
        {/* <label className="flex flex-col gap-2">
          <span className="font-semibold">Mode of Death</span>
          <div className="flex flex-col gap-2">
            {[
              { label: "Slow and painful", value: "1" },
              { label: "Slow and painless", value: "2" },
              { label: "Fast and painful", value: "3" },
              { label: "Fast and painless", value: "4" },
            ].map(({ label, value }) => (
              <label
                key={value}
                className="flex items-center gap-2 cursor-pointer border border-gray-300 p-3 rounded-md relative overflow-hidden"
              >
                <input
                  type="radio"
                  name="mode"
                  value={value}
                  checked={formData.mode === value}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, mode: e.target.value }))
                  }
                  className="peer hidden"
                />
                <div className="peer-checked:bg-blue-500 opacity-40 transition w-full h-auto inset-0 overflow-hidden absolute"></div>
                <div className="w-2 h-2 rounded-full border border-gray-400 z-10 peer-checked:border-blue-700 peer-checked:ring-2 peer-checked:ring-blue-400 peer-checked:bg-blue-200" />
                <span className="peer-checked:text-blue-100 z-10">{label}</span>
              </label>
            ))}
          </div>
        </label> */}

        <button
          type="submit"
          className=" bg-green-700 px-4 py-2 font-semibold font-medium rounded-md mt-8"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
