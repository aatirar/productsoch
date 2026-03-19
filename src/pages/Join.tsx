import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

// ─── UPDATE THESE URLs when you have the real embed links ───────────────────
// Notion embed: Share → "Embed" → copy the embed link
const NOTION_FORM_URL = 'https://www.notion.so' // replace with: https://notionforms.io/forms/YOUR-FORM-ID or notion embed URL
// Google Form embed: Send → Embed → copy src from the iframe tag
const CANADA_FORM_URL = 'https://docs.google.com/forms/d/e/PLACEHOLDER/viewform?embedded=true' // replace with real Google Form embed URL
// ────────────────────────────────────────────────────────────────────────────

type Chapter = 'pakistan' | 'canada'

const pakistanChapters = [
  { name: 'Karachi', emoji: '🌊' },
  { name: 'Lahore', emoji: '🌸' },
  { name: 'Islamabad', emoji: '🏔️' },
  { name: 'Dubai', emoji: '🏙️' },
  { name: 'UK', emoji: '🇬🇧' },
  { name: 'Saudi Arabia', emoji: '🇸🇦' },
  { name: 'USA', emoji: '🇺🇸' },
]

export default function Join() {
  const [active, setActive] = useState<Chapter>('pakistan')

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight">
            Ready to connect with your tribe?
          </h1>
          <p className="text-xl text-gray-300">
            Joining is free. Always has been. Pick your chapter and apply in 2 minutes.
          </p>
        </div>
      </section>

      {/* Chapter selector tabs */}
      <section className="bg-warm border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <button
              onClick={() => setActive('pakistan')}
              className={`flex-1 py-4 text-sm font-bold border-b-2 transition-all ${
                active === 'pakistan'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-dark'
              }`}
            >
              Pakistan, Dubai & International
            </button>
            <button
              onClick={() => setActive('canada')}
              className={`flex-1 py-4 text-sm font-bold border-b-2 transition-all ${
                active === 'canada'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-dark'
              }`}
            >
              🍁 Canada
            </button>
          </div>
        </div>
      </section>

      {/* Pakistan / All others tab */}
      {active === 'pakistan' && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Chapter pills */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-4">One form covers all these chapters:</p>
              <div className="flex flex-wrap gap-2">
                {pakistanChapters.map(c => (
                  <span key={c.name} className="flex items-center gap-1.5 bg-warm border border-gray-100 rounded-full px-3 py-1.5 text-sm font-medium text-dark">
                    <span>{c.emoji}</span> {c.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Notion form embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
              <div className="bg-warm px-6 py-4 border-b border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Application Form</p>
                <p className="text-dark font-semibold mt-0.5">Product Soch — Join the Community</p>
              </div>
              {NOTION_FORM_URL.includes('PLACEHOLDER') || NOTION_FORM_URL === 'https://www.notion.so' ? (
                /* Placeholder — replace NOTION_FORM_URL at top of file */
                <div className="p-12 text-center bg-warm/50">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📋</span>
                  </div>
                  <p className="text-dark font-bold text-lg mb-2">Notion form goes here</p>
                  <p className="text-gray-500 text-sm mb-4 max-w-sm mx-auto">
                    Replace <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">NOTION_FORM_URL</code> in <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">src/pages/Join.tsx</code> with your Notion embed URL.
                  </p>
                  <a
                    href="https://notion.so"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2.5"
                  >
                    Open Notion Form <ArrowRight size={14} />
                  </a>
                </div>
              ) : (
                <iframe
                  src={NOTION_FORM_URL}
                  className="w-full"
                  style={{ height: '700px', border: 'none' }}
                  title="Product Soch Application Form"
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Canada tab */}
      {active === 'canada' && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Canada context */}
            <div className="mb-8 bg-[#0D1B2A] text-white rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start">
              <span className="text-5xl">🍁</span>
              <div>
                <h2 className="text-xl font-extrabold mb-2">Canada Chapter — separate process</h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Canada uses a dedicated Google Form (not the Notion form). Different activities, different focus — resume reviews, career nights, navigating the North American PM market.
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-green-200">
                  <span>→ Resume review clinics</span>
                  <span>→ Career nights</span>
                  <span>→ Diaspora-first community</span>
                  <span>→ Mentorship for new arrivals</span>
                </div>
              </div>
            </div>

            {/* Google Form embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
              <div className="bg-warm px-6 py-4 border-b border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Canada Application</p>
                <p className="text-dark font-semibold mt-0.5">Product Soch Canada — Join the Community</p>
              </div>
              {CANADA_FORM_URL.includes('PLACEHOLDER') ? (
                /* Placeholder */
                <div className="p-12 text-center bg-warm/50">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📋</span>
                  </div>
                  <p className="text-dark font-bold text-lg mb-2">Canada Google Form goes here</p>
                  <p className="text-gray-500 text-sm mb-4 max-w-sm mx-auto">
                    Replace <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">CANADA_FORM_URL</code> in <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">src/pages/Join.tsx</code> with your Google Form embed URL.
                  </p>
                  <a
                    href="https://docs.google.com/forms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-dark text-sm py-2.5"
                  >
                    Open Google Form <ArrowRight size={14} />
                  </a>
                </div>
              ) : (
                <iframe
                  src={CANADA_FORM_URL}
                  className="w-full"
                  style={{ height: '700px', border: 'none' }}
                  title="Product Soch Canada Application"
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Footer nudge */}
      <section className="py-12 bg-warm border-t border-gray-100">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            Questions? Reach us at{' '}
            <a href="mailto:hello@productsoch.com" className="text-primary font-medium hover:underline">
              hello@productsoch.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
