import { db } from "@/db";
import { products } from "@/db/schema";
import { AddToCartButton } from "@/components/AddToCartButton";
import Image from "next/image";

export const dynamic = 'force-dynamic';

export default async function Home() {
  let allProducts = [];

  try {
    allProducts = await db.select().from(products);
  } catch (error) {
    console.error('Database error:', error);
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8 font-sans">
      <header className="flex justify-between items-center mb-12 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Nike Store</h1>
        <AddToCartButton />
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {allProducts.length > 0 ? (
          allProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative w-full h-64 mb-6 bg-gray-100 rounded-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain mix-blend-multiply"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">{product.name}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-xl font-bold text-gray-900">${product.price}</p>
                <button className="text-sm font-semibold text-gray-500 hover:text-black transition">
                  Details &rarr;
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <h2 className="text-xl text-gray-500">No products found. Run seed script!</h2>
          </div>
        )}
      </div>
    </main>
  );
}
