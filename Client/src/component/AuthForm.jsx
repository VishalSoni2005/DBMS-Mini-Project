import React, { useState } from "react";
import { userAuthStore } from "../store/userAuthStore";

export default function GymRegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [joinDate, setJoinDate] = useState("");

  const { registerUser } = userAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const joinDateStr = joinDate;

    const dateObj = new Date(joinDateStr); // creates a Date object
    // const formattedDate = dateObj.toISOString().slice(0, 10); // => "2025-04-23"
    const formattedDate = dateObj.toISOString().slice(0, 10); // => "2025-04-23"

    const userData = {
      name,
      email,
      password,
      phone,
      joinDate: formattedDate,
    };

    try {
      console.log("User Data:", userData); // Log the user data to the console

      await registerUser(userData);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setJoinDate("");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center">
          <img
            alt="Gym Logo"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Gym User Registration
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Fill out the form to create your gym membership
          </p>
        </div>

        <form
          action="#"
          method="POST"
          className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              name="phone"
              type="tel"
              required
              placeholder="123-456-7890"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="joinDate"
              className="block text-sm font-medium text-gray-700">
              Join Date
            </label>
            <input
              id="joinDate"
              name="joinDate"
              onChange={(e) => setJoinDate(e.target.value)}
              value={joinDate}
              type="date"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
