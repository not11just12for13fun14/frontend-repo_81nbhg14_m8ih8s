export default function Projects() {
  const projects = [
    {
      title: 'Realtime Collaboration Tool',
      description: 'A multiplayer whiteboard with presence and CRDTs. Built with React, WebSockets, and Tailwind.',
      tags: ['React', 'WebSockets', 'Tailwind'],
      link: '#'
    },
    {
      title: 'E‑commerce UI Kit',
      description: 'A polished component library for online stores. Focus on accessibility and customization.',
      tags: ['Design', 'Accessibility', 'Storybook'],
      link: '#'
    },
    {
      title: 'Data Viz Playground',
      description: 'Interactive charts and 3D scenes for complex datasets. Emphasis on performance and UX.',
      tags: ['D3', 'Three.js', 'Perf'],
      link: '#'
    },
  ]

  return (
    <section id="projects" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Featured projects</h2>
        <p className="mt-2 text-neutral-600 max-w-2xl">A selection of work that highlights my skills in building interactive, performant experiences.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group relative rounded-2xl border border-neutral-200 hover:border-neutral-900/20 p-6 shadow-sm hover:shadow-md transition bg-white">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-neutral-700">{p.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-700">Case study</span>
              </div>
              <p className="mt-3 text-sm text-neutral-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-700">{t}</span>
                ))}
              </div>
              <div className="mt-6 text-sm font-semibold text-indigo-600">Learn more →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
