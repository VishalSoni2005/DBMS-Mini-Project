import React from "react";
import { Navigate, useNavigate } from 'react-router';

const Contact = () => {
  const Navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    Navigate("/")
  }
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-12 px-8 py-20 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-white text-gray-800">
      <div className="flex flex-col justify-between">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-violet-700">
            Let's talk!
          </h2>
          <p className="text-lg text-gray-600">
            Have questions or feedback? Fill out the form and our team will get
            back to you as soon as possible.
          </p>
        </div>
        <img
          src="/contact.jpg"
          alt="Customer support"
          className="p-6 rounded-xl object-cover"
        />
      </div>

      <form
        noValidate
        className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-semibold">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-sm font-semibold">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-1 text-sm font-semibold">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            placeholder="Type your message here..."
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <button
        onClick={handleSubmit}
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-600 text-white hover:bg-violet-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
