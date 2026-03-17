import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";

export default function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      <Hero />

      {/* Featured Products */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Featured Sweets</h2>
            <p className="mt-1 text-sm text-slate-500">Our most popular picks</p>
          </div>
          <Link
            href="/products"
            className="text-sm font-medium text-amber-600 hover:text-amber-700"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Made with Heart</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            We&apos;re a group of sweet-lovers who believe treats should be made fresh, with quality
            ingredients, right here in New Zealand.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-white"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </>
  );
}
