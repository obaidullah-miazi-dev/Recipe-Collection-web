import Image from "next/image";
import Link from "next/link";
import { MapPin, ChefHat } from "lucide-react";

const RecipeCard = ({ data }) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (data[`strIngredient${i}`] && data[`strIngredient${i}`].trim()) {
      ingredients.push({
        ingredient: data[`strIngredient${i}`],
        measure: data[`strMeasure${i}`]?.trim() || "",
      });
    }
  }

  return (
    <div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ">

      <div className="relative aspect-video overflow-hidden">
        <Image
          src={data.strMealThumb}
          alt={data.strMeal}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
   
        <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
          {data.strCategory}
        </div>

      </div>

      <div className="p-6 space-y-4">
     
        <h3 className="text-2xl font-bold text-gray-800 line-clamp-2">
          {data.strMeal}
        </h3>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-green-600" />
            <span className="font-medium">{data.strArea || "Worldwide"}</span>
          </div>

          <div className="flex items-center gap-2">
            <ChefHat className="w-4 h-4 text-green-600" />
            <span>{ingredients.length} ingredients</span>
          </div>
        </div>


        <div className="pt-2 md:h-30">
          <p className="text-sm text-gray-500 mb-2">Key ingredients:</p>
          <div className="flex flex-wrap gap-2">
            {ingredients.slice(0, 4).map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
              >
                {item.measure} {item.ingredient}
              </span>
            ))}
            {ingredients.length > 4 && (
              <span className="text-xs text-gray-500 self-center">
                +{ingredients.length - 4} more
              </span>
            )}
          </div>
        </div>

     
        <Link
          href={`/recipes/${data.idMeal}`}
          className="block w-full mt-6 text-center py-3 bg-linear-to-r from-green-600 to-teal-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-teal-700 transform hover:scale-105 transition duration-300 shadow-md"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;