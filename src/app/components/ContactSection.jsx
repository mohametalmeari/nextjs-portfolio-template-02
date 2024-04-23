"use client";

import React, { useState } from "react";
import OutlineButton from "./OutlineButton";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      name: e.target.name.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      className="md:px-20 lg:px-40 w-full flex justify-between mb-40 gap-20 scroll-m-40"
      id="contact"
    >
      <div className="flex-[2]">
        <h2 className="text-6xl mb-10 w-fit">
          <div className="flex items-center justify-between mb-5">
            <span>Let's</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b16cea] via-[#ff5e69] to-[#ffa84b] text-8xl">
              ➜
            </span>
          </div>
          <span>Connect.</span>
        </h2>
        <p className="text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit
          tempora excepturi tempore, sed voluptate ut eveniet enim saepe.
        </p>
      </div>
      <div className="flex-[3]">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              name="name"
              type="text"
              required
              className="bg-[#1e1e1e] border-b-2 placeholder-[#ADB7BE] text-gray-100 text-sm w-full p-2.5"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <input
              name="email"
              type="email"
              required
              className="bg-[#1e1e1e] border-b-2 placeholder-[#ADB7BE] text-gray-100 text-sm w-full p-2.5"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-6">
            <textarea
              name="message"
              className="bg-[#1e1e1e] border-b-2 placeholder-[#ADB7BE] text-gray-100 text-sm w-full p-2.5"
              placeholder="Message"
            />
          </div>
          <OutlineButton type="submit" className="w-fit">
            Send Message
          </OutlineButton>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
