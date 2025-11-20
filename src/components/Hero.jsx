import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-28 pb-16 sm:px-8 md:px-12 lg:px-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-wider text-orange-300/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
          Global Certification Consulting
        </span>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Navigate Certifications with Confidence
        </h1>
        <p className="max-w-2xl text-lg text-white/80">
          We help ambitious teams achieve ISO, SOC, and industry standards faster—with a proven playbook, hands-on experts, and audit-ready documentation.
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a href="#contact" className="rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400">
            Book a Free Consultation
          </a>
          <a href="#services" className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
            Explore Services
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/60">
          <span>ISO 9001</span>
          <span>ISO 27001</span>
          <span>ISO 14001</span>
          <span>SOC 2</span>
          <span>GDPR</span>
        </div>
      </div>
    </section>
  );
}
