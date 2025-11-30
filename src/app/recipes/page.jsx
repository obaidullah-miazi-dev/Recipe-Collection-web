import RecipeCard from "@/components/RecipeCard";
import React from "react";

const page = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const data = await res.json();
//   console.log(data.meals);
  return (
    <div className="mt-16 w-11/12 mx-auto">
      <div className="text-center py-16 mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Discover Your Next
          <span className="text-green-600"> Favorite Recipe</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">
          Thousands of tried-and-tested recipes, from quick weeknight dinners to
          show-stopping desserts.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-12">
        {
        data.meals.map(recipe => <RecipeCard key={recipe.idMeal} data={recipe}/>)
      }
      </div>
    </div>
  );
};

export default page;
