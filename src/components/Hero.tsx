import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-white">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Sweet treats, made{" "}
            <span className="text-amber-600">fresh in NZ</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            From classic gummies to handcrafted chocolates, we make sweets the way they should
            be &mdash; with quality ingredients and a whole lot of heart.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/products"
              className="rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-700"
            >
              Browse Sweets
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
