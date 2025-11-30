import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold mb-2">Recipe</h2>
        <p className="text-green-100 mb-8">
          Delicious homemade recipes, made with love
        </p>

        
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <Link href="/" className="hover:text-green-200 transition">
            Home
          </Link>
          <Link href="/recipes" className="hover:text-green-200 transition">
            All Recipes
          </Link>
          <Link href="/" className="hover:text-green-200 transition">
            About Us
          </Link>
          <Link href="/" className="hover:text-green-200 transition">
            Contact
          </Link>
        </div>

        <p className="text-green-200 text-sm">
          © {new Date().getFullYear()} Recipe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}