import Link from "next/link";
import RecipeCard from "./RecipeCard";


async function RecentRecipesSection() {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=", {
    cache: "no-store",
  });
  const recipes = await res.json();

  // Get only the 4 recipes
  const recentRecipes = recipes.meals.slice(0,8)
  console.log(recentRecipes)

  return (
    <section className="py-20 px-6 mt-16">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
            Fresh & New
            <span className="text-green-600"> Recipes</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Check out the latest creations from our amazing community of home
            cooks!
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {recentRecipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} data={recipe} />
          ))}
        </div>

       
        <div className="text-center mt-12">
          <Link
            href="/recipes"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-2 px-6 rounded-full transition transform hover:scale-105 shadow-lg"
          >
            View All Recipes
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RecentRecipesSection;