import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        <Hero />
        <About />
        <CalloutCTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function CalloutCTA() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-8 sm:p-12">
          <div className="absolute right-0 top-0 h-56 w-56 translate-x-10 -translate-y-10 rounded-full bg-white/10 blur-2xl" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Bring an inspiring voice to your next event</h3>
            <p className="mt-2 text-white/90 max-w-2xl">Keynotes, workshops, and seminars tailored to your audience, with practical takeaways and engaging delivery.</p>
            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow hover:bg-gray-50">Book now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Islam — Instructor & Public Speaker</p>
        <div className="flex items-center gap-5 text-sm">
          <a className="text-gray-600 hover:text-gray-900" href="#about">About</a>
          <a className="text-gray-600 hover:text-gray-900" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
