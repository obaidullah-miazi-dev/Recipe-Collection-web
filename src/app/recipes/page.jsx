"use client";
import RecipeCard from "@/components/RecipeCard";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";

const Recipes = () => {
  const [searchText, setSearchText] = useState("");
  const [recipes,setRecipes] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
      );
      const data = await res.json();
      setRecipes(data.meals || []);
    };

    fetchData();
  }, [searchText]);

  const filteredRecipe = recipes?.filter(recipe => recipe.strMeal.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
  console.log(filteredRecipe)

  return (
    <div className="mt-16 w-11/12 mx-auto">
      <div className="text-center py-10 mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Discover Your Next
          <span className="text-green-600"> Favorite Recipe</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">
          Thousands of tried-and-tested recipes, from quick weeknight dinners to
          show-stopping desserts.
        </p>
      </div>

      <div className="flex justify-center mb-10 md:w-4/12 w-6/12 mx-auto relative">
        <input
          type="text"
          value={searchText}
          placeholder="Search"
          className="outline-green-500 border py-1.5 px-2 rounded-full  border-green-500 w-full"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <Search className="absolute right-2 top-1.5" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-12">
        {recipes?.map((recipe) => (
          <RecipeCard key={recipe.idMeal} data={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
