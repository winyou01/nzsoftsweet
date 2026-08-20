import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";

export default function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      <Hero />

      {/* Our one product */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">One Sweet, Done Properly</h2>
          <p className="mt-1 text-sm text-slate-500">
            Electrolyte gummies &mdash; that&apos;s the whole range.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-sm">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="text-sm font-medium text-amber-600 hover:text-amber-700"
          >
            See the details &rarr;
          </Link>
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
