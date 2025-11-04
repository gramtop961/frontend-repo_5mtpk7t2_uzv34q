import { Mail, Phone, Calendar, Globe } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Booking inquiry");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:islam@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Booking & contact</h2>
            <p className="mt-4 text-gray-600 leading-7">
              Share a few details about your event and we’ll get back within 24–48 hours.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-2 text-gray-700"><Mail className="h-4 w-4 text-emerald-600" /> islam@example.com</p>
              <p className="flex items-center gap-2 text-gray-700"><Phone className="h-4 w-4 text-emerald-600" /> +1 (555) 123-4567</p>
              <p className="flex items-center gap-2 text-gray-700"><Calendar className="h-4 w-4 text-emerald-600" /> Available for keynotes, seminars, and workshops</p>
              <p className="flex items-center gap-2 text-gray-700"><Globe className="h-4 w-4 text-emerald-600" /> In-person and virtual</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-black/5 shadow">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Your name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="Tell me about your audience, date, and desired outcomes."
                />
              </div>
              <div className="mt-6 flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-emerald-700"
                >
                  Send inquiry
                </button>
                <p className="text-xs text-gray-500">You’ll draft an email in your default mail app.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
