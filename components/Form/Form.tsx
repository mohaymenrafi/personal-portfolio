import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface Inputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Form = () => {
  const {
    handleSubmit,
    watch,
    register,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    emailjs
      .send(
        "service_ksp4bds",
        "template_v543g8a",
        data,
        "user_sWZHIrLmexbYpoTT6zgpN"
      )
      .then((res) => {
        if (res.status === 200) {
          setSuccess("Your form is sent successfully");
        }
      })
      .catch((err) => {
        setError("Error occured! Please submit your form again.");
      });
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
        <input
          placeholder="Full Name"
          type="text"
          {...register("name")}
          className="input-one"
        />
        <input
          placeholder="Your Email"
          type="email"
          {...register("email", { required: true })}
          className="input-one"
        />
        {errors.email?.type === "required" && (
          <p className="text-red-500 mt-2">Email is required</p>
        )}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject")}
          className="input-one"
        />
        <textarea
          rows={4}
          placeholder="Your message"
          {...register("message", { required: true })}
          className="input-one"
        />
        {errors.message?.type === "required" && (
          <p className="text-red-500 mt-2">Message is required</p>
        )}
        <input
          type="submit"
          className="text-green border border-slate hover:border-green hover:bg-green py-3 px-16 mt-6 text-[14px] font-mono cursor-pointer hover:text-navy self-start transition-all"
        />
      </form>
    </div>
  );
};

export default Form;
