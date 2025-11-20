import { useEffect, useRef, useState } from 'react';

const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Chatbot(){
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I’m your certification assistant. How can I help today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if(listRef.current){
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function sendMessage(e){
    e.preventDefault();
    const text = input.trim();
    if(!text) return;

    const next = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(`${backendURL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: messages }),
      });
      const data = await res.json();
      const reply = data.reply || 'Sorry, I could not generate a response.';
      const suggestions = data.suggested_follow_ups || [];
      const final = [...next, { role: 'assistant', content: reply }];
      if(suggestions.length){
        final.push({ role: 'assistant', content: 'Suggestions: ' + suggestions.join(' | ') });
      }
      setMessages(final);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'There was an error contacting the assistant.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="chat" className="w-full bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-6 max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Talk to an Expert Assistant</h2>
          <p className="mt-2 text-white/70">Ask anything about ISO, SOC, and certification roadmaps. Get quick, actionable guidance.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div ref={listRef} className="h-[360px] overflow-y-auto rounded-xl border border-white/10 bg-white/[0.03] p-4">
              {messages.map((m, i) => (
                <div key={i} className="mb-3">
                  <div className={m.role === 'user' ? 'text-orange-300' : 'text-white'}>
                    <span className="text-xs uppercase tracking-wide opacity-60 mr-2">{m.role}</span>
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && <div className="text-white/60">Assistant is typing…</div>}
            </div>
            <form onSubmit={sendMessage} className="mt-4 flex gap-3">
              <input
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                placeholder="Ask about ISO 27001 timelines, costs, or steps…"
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400 disabled:opacity-50">
                Send
              </button>
            </form>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-semibold">Why teams choose us</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-white/70">
              <li>Audit-proven templates and playbooks</li>
              <li>Hands-on experts from day one</li>
              <li>Integrated approach across multiple standards</li>
              <li>Transparent plans, timelines, and pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
