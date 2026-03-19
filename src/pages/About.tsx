export default function About() {
  const organizers = [
    { name: 'Founder Name', role: 'Founder, Karachi Chapter', linkedin: '#' },
    { name: 'Co-Organizer', role: 'Lahore Chapter Lead', linkedin: '#' },
    { name: 'Chapter Lead', role: 'Islamabad Chapter Lead', linkedin: '#' },
  ]

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-dark text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Our story</div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            Why "سوچ"?
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            سوچ means "thought" in Urdu. The name came from a simple observation: Pakistani product people think deeply, but rarely get spaces to think out loud together.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-lg text-gray-700 leading-relaxed">
          <p>
            We started in 2019 because the isolation was real. PMs in Pakistan were doing serious work — building products for millions of users, navigating messy orgs, learning the craft often without a mentor in the room. But there was nowhere to compare notes. No place to find your people.
          </p>
          <p>
            The first Soch Café in Karachi was 30 people in a coffee shop. It filled up faster than we expected. The energy was different — honest, curious, no performative LinkedIn polish. Just PMs being PMs.
          </p>
          <p>
            Six years later, we have 2,000+ members across five chapters on three continents. Every chapter feels slightly different — Karachi has the hustle, Lahore has the warmth, Islamabad has the policy-tech angle, Canada carries the weight of navigating a new system — but the core is the same. Real people, real conversations, and a commitment to making the PM journey in Pakistan a little less lonely.
          </p>
          <p>
            Product Soch is free. It always has been. It's run by people who show up because they care, not because it's their job.
          </p>
        </div>
      </section>

      {/* Organizers */}
      <section className="py-20 bg-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-dark text-center mb-12">The people behind it</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organizers.map((org) => (
              <div key={org.name} className="bg-white rounded-2xl p-6 text-center border border-gray-100">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-2xl">👤</span>
                </div>
                <h3 className="font-bold text-dark text-lg mb-1">{org.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{org.role}</p>
                <a href={org.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-primary text-sm font-medium hover:underline">
                  LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
