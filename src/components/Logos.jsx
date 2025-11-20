export default function Logos(){
  const logos = ['Acme Corp', 'Globex', 'Innotech', 'Umbrella', 'Stark', 'Wayne'];
  return (
    <section className="w-full bg-neutral-950 py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
          {logos.map((name) => (
            <div key={name} className="text-white/50 text-sm">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
