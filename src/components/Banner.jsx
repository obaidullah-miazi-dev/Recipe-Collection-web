import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row gap-12 items-center w-11/12 mx-auto md:mt-32 mt-12 relative">
      <div>
        <div className="flex flex-col  justify-center md:justify-start items-center md:items-start">
        <h1 className="text-5xl text-center md:text-left font md:text-8xl font-bold text-gray-800 leading-tight">
          Cook with
          <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-teal-600">
            {" "}
            Love
          </span>
          ,<br />
          Eat with
          <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-teal-600">
            {" "}
            Joy
          </span>
        </h1>

        <p className="mt-6 text-center md:text-left mb-12 text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
          Discover thousands of easy, healthy, and delicious recipes made by
          home cooks just like you. From quick weeknight dinners to weekend
          baking adventures we’ve got your table covered.
        </p>

        <div>
          <Link
            href="/recipes"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-full shadow-lg text-center transform hover:scale-105 transition duration-300"
          >
            Explore Recipes
          </Link>
        </div>
      </div>

      <div className="w-[500] h-[500] hidden md:block rounded-full absolute top-8 blur-3xl bg-green-100 -z-30"></div>
      <div className="w-[500] h-[500] rounded-full absolute top-46 right-8 blur-3xl bg-green-100 -z-30"></div>
      </div>

      <div>
        <Image src={"/images/recipe-banner.png"} width={700} height={700} alt="banner imae" />
      </div>
    </div>
  );
};

export default Banner;
