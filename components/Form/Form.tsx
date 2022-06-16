import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  //   console.log(watch("example"));

  return (
    <div className="max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-6"
      >
        <input
          placeholder="Full Name"
          type="text"
          {...register("name")}
          className="input-one"
        />
        <input
          placeholder="Your Email"
          type="text"
          {...register("email")}
          className="input-one"
        />
        <input
          placeholder="Subject"
          type="text"
          {...register("subject")}
          className="input-one"
        />
        <textarea
          rows={4}
          placeholder="Your message"
          {...register("message")}
          className="input-one"
        />
        {/* <input defaultValue={"test"} {...register("example")} />
        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>} */}
        <input
          type="submit"
          className="text-green border border-slate hover:border-green hover:bg-green py-3 px-16 text-[14px] font-mono cursor-pointer hover:text-navy self-start transition-all"
        />
      </form>
    </div>
  );
};

export default Form;
