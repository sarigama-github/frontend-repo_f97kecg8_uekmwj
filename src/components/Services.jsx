export default function Services(){
  const items = [
    {
      title: 'ISO Programs',
      desc: 'End-to-end consulting for ISO 9001, 27001, 14001 and more.',
    },
    {
      title: 'Audit Readiness',
      desc: 'Internal audits, gap assessments, and stage 1/2 audit support.',
    },
    {
      title: 'Policy Toolkit',
      desc: 'Audit-ready templates customized to your operations and risks.',
    },
    {
      title: 'Training & Enablement',
      desc: 'Role-based training and workshops to embed best practices.',
    },
  ];
  return (
    <section id="services" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Expert Services</h2>
          <p className="mt-3 text-white/70">A structured approach that scales with your organization—from first steps to certification and beyond.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((card) => (
            <div key={card.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-lg backdrop-blur-sm transition hover:translate-y-[-2px] hover:bg-white/[0.06]">
              <div className="mb-3 h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400" />
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-white/70">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
