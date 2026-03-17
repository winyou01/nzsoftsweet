import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-lg">
      <div className="aspect-square bg-slate-100 flex items-center justify-center">
        <span className="text-4xl">🍬</span>
      </div>
      <div className="p-5">
        <span className="text-xs font-medium uppercase tracking-wide text-amber-600">
          {product.category}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">{product.description}</p>
        <p className="mt-3 text-lg font-bold text-slate-900">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
