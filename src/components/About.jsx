import { BookOpen, Handshake, Users, Compass } from "lucide-react";

const topics = [
  {
    icon: BookOpen,
    title: "Education & Personal Growth",
    desc: "Actionable frameworks to learn faster, teach better, and stay consistent.",
  },
  {
    icon: Users,
    title: "Leadership & Teams",
    desc: "Principles for leading with empathy, clarity, and accountability.",
  },
  {
    icon: Handshake,
    title: "Community & Service",
    desc: "Building strong communities rooted in purpose and compassion.",
  },
  {
    icon: Compass,
    title: "Faith & Practice",
    desc: "Timeless guidance for living with intention in modern life.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">About Islam</h2>
            <p className="mt-4 text-gray-600 leading-7">
              With years of experience in teaching and public speaking, Islam delivers talks that blend clarity, depth, and practical takeaways. Audiences leave informed, inspired, and ready to act.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
                <dt className="text-sm text-gray-500">Talks delivered</dt>
                <dd className="text-2xl font-semibold text-gray-900">250+</dd>
              </div>
              <div className="rounded-xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
                <dt className="text-sm text-gray-500">Years teaching</dt>
                <dd className="text-2xl font-semibold text-gray-900">10+</dd>
              </div>
              <div className="rounded-xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
                <dt className="text-sm text-gray-500">Cities reached</dt>
                <dd className="text-2xl font-semibold text-gray-900">35+</dd>
              </div>
              <div className="rounded-xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
                <dt className="text-sm text-gray-500">Audience satisfaction</dt>
                <dd className="text-2xl font-semibold text-gray-900">98%</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {topics.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="group rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-700 grid place-content-center ring-1 ring-inset ring-emerald-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
