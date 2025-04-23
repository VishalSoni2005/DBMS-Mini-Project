import React from "react";
import { Link } from 'react-router';

const Hero = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/workout.png"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h2 className="text-4xl font-bold leading-none sm:text-3xl">
            Unlock
            <span className="dark:text-violet-600">Your Power</span>
            <br />
            Redefine Your Limits.
          </h2>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Your fitness journey starts here — whether you're lifting for
            strength, toning for balance, or moving for joy.
            <br className="hidden md:inline lg:hidden" />
            Join a community that supports your goals, every rep of the way.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to={"/register"}
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
              Join Us Now
            </Link>
            <Link
              to={"/contact"}
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">
              Contack Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
