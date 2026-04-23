import { Helmet } from 'react-helmet-async'

const ambassadors = [
  { name: 'Syed Mohammad Mohamman', role: 'Community Ambassador', linkedin: 'https://www.linkedin.com/in/smmohamman/', photo: '/photos/mohamman-ambassador.jpeg' },
  { name: 'Saifullah Khan', role: 'Community Ambassador', linkedin: 'https://www.linkedin.com/in/saifullah-khan-26527945/', photo: '/photos/saif-khan-ambassador.jpeg' },
  { name: 'Sarrah Moiz', role: 'Chapter Lead, Saudi Arabia', linkedin: 'https://www.linkedin.com/in/sarrahmoiz/', photo: '/photos/sarah-ambassador.jpeg' },
  { name: 'Aatir Abdul Rauf', role: 'Founder, Product Soch', linkedin: 'https://www.linkedin.com/in/aatirar/', photo: '/photos/aatir-ambassador.jpeg' },
]

export default function About() {
  return (
    <div className="pt-16">
      <Helmet>
        <title>About | Product Soch | Pakistan's PM Community Story</title>
        <meta name="description" content="Product Soch started in 2019 with 30 people in a Lahore coffee shop. Today it's 1,000+ members across 6 chapters on 3 continents. Free, forever. Here's our story." />
        <meta property="og:title" content="About Product Soch: Why We Built Pakistan's PM Community" />
        <meta property="og:description" content="Learn the story behind Product Soch, from a coffee shop in Lahore to 1,000+ product managers across Karachi, Lahore, Islamabad, Canada, Dubai, and beyond." />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero */}
      <section className="py-24 bg-dark text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Our story</div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            Why "Soch"?
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Soch means "thought" in Urdu. The name came from a simple observation: Pakistani product people think deeply, but rarely get spaces to think out loud together.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-lg text-gray-700 leading-relaxed">
          <p>
            We started in 2019 because the isolation was real. PMs in Pakistan were doing serious work: building products for millions of users, navigating messy orgs, learning the craft often without a mentor in the room. But there was nowhere to compare notes. No place to find your people.
          </p>
          <p>
            The first Soch Café in Lahore was 30 people in a coffee shop. It filled up faster than we expected. The energy was different: honest, curious, no performative LinkedIn polish. Just PMs being PMs.
          </p>
          <p>
            Five years later, we have 1,000+ members across chapters on three continents. Every chapter feels slightly different. Karachi has the hustle, Lahore has the warmth, Islamabad has the policy-tech angle, Canada carries the weight of navigating a new system. But the core is the same. Real people, real conversations, and a commitment to making the PM journey in Pakistan a little less lonely.
          </p>
          <p>
            Product Soch is free. It always has been. It's run by people who show up because they care, not because it's their job.
          </p>
        </div>
      </section>

      {/* Community Ambassadors */}
      <section className="py-20 bg-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">The people behind it</p>
          <h2 className="text-3xl font-extrabold text-dark mb-2">Community ambassadors</h2>
          <p className="text-gray-500 mb-10 text-base">The people who show up, lead chapters, and keep the community going.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {ambassadors.map((person) => (
              <div key={person.name} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                  {person.photo ? (
                    <img src={person.photo} alt={person.name} className="w-full h-full object-cover object-top" />
                  ) : (
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-2xl">{person.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-dark text-base mb-1 leading-snug">{person.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{person.role}</p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-semibold hover:underline"
                >
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
