import Image from "next/image";
import Link from "next/link";
import { MapPin, ChefHat, Youtube, ExternalLink, ArrowLeft } from "lucide-react";

export default async function RecipePage({ params }) {
  const { id } = await params;


  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await res.json();
  const recipe = data.meals[0];

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-600">Recipe not found</p>
      </div>
    );
  }

//   here the recipe ingredients with messeure added 
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push({ ingredient, measure: measure?.trim() || "" });
    }
  }
  console.log(ingredients)

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
     
      <div className="container mx-auto px-4 pt-8">
        <Link
          href="/recipes"
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium mb-6"
        >
          <ArrowLeft size={20} />
          Back to recipes
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8 ">
        <div className="grid md:grid-cols-2 gap-10">
    
          <div className="relative aspect-square md:aspect-auto rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              fill
              className="object-cover"
              priority
            />
            {recipe.strYoutube && (
              <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition"
              >
                <Youtube size={28} />
              </a>
            )}
          </div>

      
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                {recipe.strMeal}
              </h1>
              <div className="flex flex-wrap gap-4 mt-4 text-lg">
                <span className="flex items-center gap-2 text-green-700">
                  <MapPin size={20} />
                  {recipe.strArea}
                </span>
                <span className="flex items-center gap-2 text-green-700">
                  <ChefHat size={20} />
                  {recipe.strCategory}
                </span>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
              <ul className="space-y-3">
                {ingredients.map((item, idx) => (
                  <li key={idx} className="flex justify-between text-gray-700">
                    <span className="font-medium">{item.ingredient}</span>
                    <span className="text-green-600 font-semibold">{item.measure}</span>
                  </li>
                ))}
              </ul>
            </div>

            {recipe.strSource && (
              <a
                href={recipe.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
              >
                Original Recipe Source
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <div className="mt-16 bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            How to Make It
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
            {recipe.strInstructions}
          </div>
        </div>
      </div>
    </div>
  );
}