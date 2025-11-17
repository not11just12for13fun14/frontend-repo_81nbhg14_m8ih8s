export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">About me</h2>
          <p className="mt-4 text-neutral-600">
            I’m a product‑minded engineer who cares about polish, performance, and people. I bring designs to life and ship thoughtful
            experiences quickly. I enjoy collaborating across design and engineering to build lovable products.
          </p>
          <ul className="mt-6 space-y-3 text-neutral-700">
            <li>• 5+ years building React apps at startup speed</li>
            <li>• Strong in UX, design systems, and accessibility</li>
            <li>• Comfortable across the stack: Node, Python, and databases</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Projects shipped" value="28" />
            <Stat label="Avg. Lighthouse" value="98" />
            <Stat label="Users impacted" value="250k+" />
            <Stat label="Awards" value="7" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-4 text-center">
      <div className="text-2xl font-extrabold text-neutral-900">{value}</div>
      <div className="text-sm text-neutral-600">{label}</div>
    </div>
  )
}
