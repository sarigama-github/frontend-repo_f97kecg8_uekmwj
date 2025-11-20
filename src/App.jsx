import Hero from './components/Hero';
import Services from './components/Services';
import Logos from './components/Logos';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 md:px-12 lg:px-16">
          <a href="#" className="text-white font-semibold">Certify.Global</a>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#chat" className="hover:text-white">Assistant</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-400">Get Started</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Logos />
        <Services />
        <Chatbot />

        <section id="contact" className="bg-neutral-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold sm:text-4xl">Book a Consultation</h2>
                <p className="mt-3 text-white/70">Share your goals and we’ll tailor a plan for your certification path.</p>
                <ul className="mt-6 space-y-2 text-white/70">
                  <li>• ISO 9001, ISO 27001, ISO 14001, SOC 2</li>
                  <li>• Multi-site and multi-standard programs</li>
                  <li>• Flexible engagement models</li>
                </ul>
              </div>
              <form className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="First name" />
                  <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Last name" />
                  <input className="sm:col-span-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Work email" />
                  <input className="sm:col-span-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Company" />
                  <textarea rows="4" className="sm:col-span-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="What are you aiming to achieve?" />
                </div>
                <button type="button" className="mt-4 w-full rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400">Submit</button>
                <p className="mt-2 text-center text-xs text-white/50">We’ll get back within 1 business day.</p>
              </form>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-black/60 py-10 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-8 md:px-12 lg:px-16">
            <p className="text-white/60">© {new Date().getFullYear()} Certify.Global. All rights reserved.</p>
            <div className="flex items-center gap-6 text-white/60">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
