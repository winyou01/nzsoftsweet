import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | NZ Soft Sweet",
  description: "Our electrolyte gummies, handcrafted in New Zealand.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Our Product</h1>
      <p className="mt-2 text-slate-500">
        One sweet, made properly &mdash; electrolyte gummies, handcrafted in New Zealand.
      </p>

      <div className="mx-auto mt-12 max-w-sm">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
