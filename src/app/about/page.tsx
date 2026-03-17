import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | NZ Soft Sweet",
  description: "Learn about our story and passion for handcrafted sweets.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">About Us</h1>

      <div className="mt-8 space-y-6 text-slate-600 leading-relaxed">
        <p>
          NZ Soft Sweet started with a simple idea: make sweets the way they used to be made &mdash;
          with real ingredients, no shortcuts, and a whole lot of care.
        </p>
        <p>
          We&apos;re a group of friends who share a passion for confectionery. What began as a hobby
          in our kitchens has grown into a business we&apos;re proud of. Every batch is handcrafted in
          small quantities to ensure the quality and freshness our customers love.
        </p>
        <p>
          Based in New Zealand, we source local ingredients wherever possible and take pride in
          supporting our community. Whether it&apos;s classic gummy bears, rich chocolate truffles,
          or tangy sour worms, we put the same love and attention into every treat.
        </p>
      </div>

      {/* Team placeholder */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-slate-900">The Team</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {["Member 1", "Member 2", "Member 3"].map((name) => (
            <div key={name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-2xl">
                👤
              </div>
              <p className="mt-4 font-semibold text-slate-900">{name}</p>
              <p className="text-sm text-slate-500">Co-Founder</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
