import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-bold text-slate-900">NZ Soft Sweet</h3>
            <p className="mt-2 text-sm text-slate-500">
              Handcrafted sweets made with love in New Zealand.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Links</h4>
            <div className="mt-2 flex flex-col gap-1">
              <Link href="/products" className="text-sm text-slate-500 hover:text-amber-600">Products</Link>
              <Link href="/about" className="text-sm text-slate-500 hover:text-amber-600">About</Link>
              <Link href="/contact" className="text-sm text-slate-500 hover:text-amber-600">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Follow Us</h4>
            <div className="mt-2 flex flex-col gap-1">
              <a href="#" className="text-sm text-slate-500 hover:text-amber-600">Instagram</a>
              <a href="#" className="text-sm text-slate-500 hover:text-amber-600">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} NZ Soft Sweet. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
