import { Coffee, Users, Monitor, FileText, BookOpen, Zap, MessageCircle, Hash } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function WhatsAppMock() {
  const messages = [
    { name: 'Ahmed K.', text: 'Anyone hiring PM roles in fintech? 🚀', time: '10:02' },
    { name: 'Sara M.', text: 'Just dropped a JD in #jobs — PM at a B2B SaaS startup 👀', time: '10:05' },
    { name: 'Usman A.', text: 'Hot take: most PMs focus too much on delivery, too little on discovery', time: '10:11' },
    { name: 'Farida H.', text: 'Next Pocket Meetup is Thursday — Karachi folks in? ☕', time: '10:18' },
  ]
  return (
    <div className="bg-[#0b141a] p-3 h-full flex flex-col justify-end gap-1.5">
      <div className="text-center mb-1">
        <span className="text-[#8696a0] text-[10px] bg-[#182229] px-3 py-0.5 rounded-full">Today</span>
      </div>
      {messages.map((msg, i) => (
        <div key={i} className="flex flex-col items-start max-w-[85%]">
          <span className="text-[#53bdeb] text-[9px] font-semibold ml-1 mb-0.5">{msg.name}</span>
          <div className="bg-[#202c33] rounded-lg rounded-tl-sm px-2.5 py-1.5 text-[10px] text-[#e9edef] leading-snug">
            {msg.text}
            <span className="text-[#8696a0] text-[8px] ml-2 float-right mt-0.5">{msg.time}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function SlackMock() {
  const channels = ['#general', '#jobs', '#resources', '#karachi', '#canada']
  const messages = [
    { name: 'Zara P.', text: 'Shared a framework template for roadmap prioritisation 📋', time: '9:45' },
    { name: 'Hassan R.', text: 'Anyone else reading Shape Up? Chapter 4 is gold', time: '9:58' },
    { name: 'Nadia S.', text: 'Resume review slots open for this Saturday — DM me', time: '10:14' },
  ]
  return (
    <div className="bg-[#1a1d21] h-full flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-28 bg-[#19171d] flex flex-col pt-3 px-2 gap-1 flex-shrink-0">
        <span className="text-[#e8e8e8] text-[9px] font-bold mb-1 px-1">Product Soch</span>
        {channels.map(ch => (
          <span key={ch} className={`text-[9px] px-1.5 py-0.5 rounded ${ch === '#general' ? 'bg-[#F6A801]/20 text-[#F6A801]' : 'text-[#9b9b9b]'}`}>{ch}</span>
        ))}
      </div>
      {/* Messages */}
      <div className="flex-1 flex flex-col justify-end gap-2 p-2.5">
        <span className="text-[#9b9b9b] text-[9px] text-center"># general</span>
        {messages.map((msg, i) => (
          <div key={i} className="flex gap-1.5 items-start">
            <div className="w-5 h-5 rounded bg-[#F6A801]/30 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-[#e8e8e8] text-[9px] font-semibold">{msg.name} </span>
              <span className="text-[#9b9b9b] text-[8px]">{msg.time}</span>
              <p className="text-[#d1d2d3] text-[9px] leading-snug mt-0.5">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CardImage({ photo, objectPos, alt, mock }: { photo?: string; objectPos?: string; alt: string; mock?: 'whatsapp' | 'slack' }) {
  if (mock === 'whatsapp') return <WhatsAppMock />
  if (mock === 'slack') return <SlackMock />
  return (
    <img
      src={photo}
      alt={alt}
      className={`w-full h-full object-cover ${objectPos ?? 'object-center'} group-hover:scale-105 transition-transform duration-500`}
      loading="lazy"
    />
  )
}

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="text-primary text-xs font-bold uppercase tracking-widest mb-5">{label}</p>
  )
}

export default function CommunityLife() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation()
  const { ref: mainRef, isVisible: mainVisible } = useScrollAnimation(0.05)
  const { ref: formatsRef, isVisible: formatsVisible } = useScrollAnimation(0.05)
  const { ref: networkRef, isVisible: networkVisible } = useScrollAnimation(0.05)

  return (
    <section className="py-24 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            What happens at{' '}
            <span className="text-primary">Product Soch?</span>
          </h2>
        </div>

        {/* Row 1: Main event formats */}
        <div ref={mainRef as React.RefObject<HTMLDivElement>} className="mb-14">
          <SectionLabel label="Our signature formats" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Coffee,
                title: 'Soch Cafés',
                description: 'Quarterly flagship meetups in Karachi, Lahore, Islamabad. 80–150 people, one sharp speaker, and the conversations that happen after.',
                photo: '/photos/karachi-session-2.jpeg',
                objectPos: 'object-center',
                tag: null,
              },
              {
                icon: Users,
                title: 'Pocket Meetups',
                description: 'Coffee with 10 of your people. No stage, no agenda — just product folk talking honestly.',
                photo: '/photos/canada-pocket-meetup-1.jpeg',
                objectPos: 'object-top',
                tag: 'Organized by community members',
              },
              {
                icon: Monitor,
                title: 'Virtual Hangouts',
                description: 'Online sessions that bridge chapters across time zones. Same sharp conversations, no commute.',
                photo: '/photos/virtual-hangout.jpg',
                objectPos: 'object-center',
                tag: null,
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-300 ${mainVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 90}ms`, transition: `opacity 0.6s ${i * 90}ms, transform 0.6s ${i * 90}ms, background-color 0.3s, border-color 0.3s` }}
                >
                  <div className="aspect-[3/2] overflow-hidden bg-[#0d1b2a]">
                    <CardImage photo={item.photo} objectPos={item.objectPos} alt={item.title} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-primary" />
                      </div>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      {item.tag && (
                        <span className="ml-auto text-[10px] text-primary bg-primary/10 rounded-full px-2 py-0.5 whitespace-nowrap flex-shrink-0">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Row 2: Chapter formats */}
        <div ref={formatsRef as React.RefObject<HTMLDivElement>} className="mb-14">
          <SectionLabel label="Different formats chapters explore" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: FileText,
                title: 'Resume Reviews',
                description: 'Dedicated sessions for Pakistani PMs navigating the North American job market.',
                photo: '/photos/lahore-session-3.jpeg',
                objectPos: 'object-top',
                tag: 'Canada chapter',
              },
              {
                icon: BookOpen,
                title: 'Bootcamps',
                description: 'Multi-session deep dives into frameworks, tools, and skills that compound over time.',
                photo: '/photos/keynotes-with-partners.jpg',
                objectPos: 'object-center',
                tag: null,
              },
              {
                icon: Zap,
                title: 'Sochathons',
                description: 'Community-run hackathons where teams solve real problems in a day. Product of Tomorrow — where attendees prototyped the future of a product — is a crowd favourite.',
                photo: '/photos/islamabad-product-of-tomorrow-1.jpeg',
                objectPos: 'object-center',
                tag: 'Annual event',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-300 ${formatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 90}ms`, transition: `opacity 0.6s ${i * 90}ms, transform 0.6s ${i * 90}ms, background-color 0.3s, border-color 0.3s` }}
                >
                  <div className="aspect-[3/2] overflow-hidden bg-[#0d1b2a]">
                    <CardImage photo={item.photo} objectPos={item.objectPos} alt={item.title} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-primary" />
                      </div>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      {item.tag && (
                        <span className="ml-auto text-[10px] text-primary bg-primary/10 rounded-full px-2 py-0.5 whitespace-nowrap flex-shrink-0">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Row 3: Networking */}
        <div ref={networkRef as React.RefObject<HTMLDivElement>}>
          <SectionLabel label="How the community stays connected" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: MessageCircle,
                title: 'WhatsApp Channel',
                description: 'The always-on async layer. Job leads, framework debates, salary check-ins.',
                mock: 'whatsapp' as const,
              },
              {
                icon: Hash,
                title: 'Slack Workspace',
                description: 'Dedicated channels by city, topic, and career stage. The place for longer conversations.',
                mock: 'slack' as const,
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-300 ${networkVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 90}ms`, transition: `opacity 0.6s ${i * 90}ms, transform 0.6s ${i * 90}ms, background-color 0.3s, border-color 0.3s` }}
                >
                  <div className="aspect-[3/2] overflow-hidden bg-[#0d1b2a]">
                    <CardImage alt={item.title} mock={item.mock} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-primary" />
                      </div>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
