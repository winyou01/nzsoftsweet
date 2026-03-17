import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | NZ Soft Sweet",
  description: "Browse our full range of handcrafted sweets.",
};

export default function ProductsPage() {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Our Sweets</h1>
      <p className="mt-2 text-slate-500">Browse our full range of handcrafted treats.</p>

      {categories.map((category) => (
        <section key={category} className="mt-12">
          <h2 className="text-lg font-semibold text-slate-800">{category}</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.category === category)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
