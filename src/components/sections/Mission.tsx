import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const pillars = [
  {
    num: '01',
    title: 'Meet relatable people',
    desc: 'Build genuine friendships with PMs who actually get what you do.',
    photo: '/photos/pocket-meetup.jpg',
    photoPos: 'object-center',
  },
  {
    num: '02',
    title: 'Mentor & give back',
    desc: 'Pakistani talent helping Pakistani talent. Pass down what you know.',
    photo: '/photos/canada-speaker-2.jpeg',
    photoPos: 'object-top',
  },
  {
    num: '03',
    title: 'Teach & learn',
    desc: 'Real sessions. Real speakers. The kind of knowledge that sticks.',
    photo: '/photos/karachi-session.jpg',
    photoPos: 'object-center',
  },
  {
    num: '04',
    title: 'Upskill',
    desc: 'Frameworks, tools, and perspectives you can use tomorrow.',
    photo: '/photos/dubai-session-2.jpg',
    photoPos: 'object-top',
  },
]

export default function Mission() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation()
  const { ref: pillarsRef, isVisible: pillarsVisible } = useScrollAnimation(0.08)

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Headline */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mb-14 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Why Product Soch exists</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark leading-tight">
            Product Soch helps{' '}
            <span className="relative inline-block">
              <span className="relative z-10">connect, inspire,</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-primary/20 -skew-x-2 rounded" />
            </span>
            {' '}and upskill Pakistani product professionals to build globally admired products.
          </h2>
        </div>

        {/* 2×2 pillar grid */}
        <div
          ref={pillarsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.num}
              className={`group relative rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-400 hover:-translate-y-1 ${
                pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms`, transition: `opacity 0.6s ${i * 100}ms, transform 0.6s ${i * 100}ms, box-shadow 0.3s, border-color 0.3s` }}
            >
              {/* Photo — taller aspect in 2-col grid */}
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={pillar.photo}
                  alt={pillar.title}
                  className={`w-full h-full object-cover ${pillar.photoPos} group-hover:scale-105 transition-transform duration-500`}
                  loading="lazy"
                />
              </div>

              {/* Card body */}
              <div className="p-5 bg-white flex items-start gap-4">
                {/* Number badge */}
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/15 text-primary text-sm font-black flex items-center justify-center mt-0.5">
                  {pillar.num}
                </span>
                <div>
                  {/* Amber accent bar */}
                  <div className="w-8 h-1 bg-primary rounded-full mb-2 group-hover:w-14 transition-all duration-300" />
                  <h3 className="text-base font-extrabold text-dark mb-1">{pillar.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
