import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | NZ Soft Sweet",
  description: "Get in touch with us. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Get in Touch</h1>
      <p className="mt-2 text-slate-500">
        Have a question, want to place a bulk order, or just say hi? We&apos;d love to hear from you.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <ContactForm />

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-slate-900">Email</h3>
            <p className="mt-1 text-slate-600">hello@nzsoftsweet.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Location</h3>
            <p className="mt-1 text-slate-600">New Zealand</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Follow Us</h3>
            <div className="mt-2 flex gap-4">
              <a href="#" className="text-sm text-amber-600 hover:text-amber-700">Instagram</a>
              <a href="#" className="text-sm text-amber-600 hover:text-amber-700">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
