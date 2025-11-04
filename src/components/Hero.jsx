import { Mic, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(45,212,191,0.25),transparent_50%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-inset ring-emerald-200 text-xs font-medium">
              <Mic className="h-3.5 w-3.5" /> Public Speaker & Instructor
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Inspiring hearts, transforming minds.
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl">
              Islam is an educator and keynote speaker delivering powerful talks on leadership, faith, and community. Clear, practical, and deeply human.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-gray-800"
              >
                View topics
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
              >
                <PlayCircle className="h-4 w-4" /> Book a talk
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-400 to-teal-300 blur-2xl opacity-40" />
              <div className="relative h-full w-full rounded-3xl bg-white ring-1 ring-black/5 shadow-xl grid place-content-center overflow-hidden">
                <div className="h-36 w-36 sm:h-40 sm:w-40 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 grid place-content-center text-white text-4xl sm:text-5xl font-bold">
                  IS
                </div>
                <p className="mt-4 text-sm text-gray-500 text-center px-6">
                  A friendly face with a powerful message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
