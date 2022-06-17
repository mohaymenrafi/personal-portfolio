import React from "react";
import Form from "../Form/Form";

const Contact = () => {
  return (
    <section className="pt-7 pb-100" id="contact">
      <h3 className="text-center text-green font-mono text-base">
        03. What&apos;s Next?
      </h3>
      <h2 className=" text-6xl text-lightest-slate text-center font-bold mt-4">
        Get in touch
      </h2>
      <div className="mt-12">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
