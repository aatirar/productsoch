import { Coffee, MessageCircle, Youtube, Users, FileText, Zap } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

// Mini WhatsApp mock — shown instead of photo for the WhatsApp card
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

const activities = [
  {
    icon: Coffee,
    title: 'Soch Cafés',
    description: 'Quarterly flagship meetups in Karachi, Lahore, Islamabad. 80–150 people, one sharp speaker, and the conversations that happen after.',
    photo: '/photos/karachi-session-2.jpeg',
    objectPos: 'object-center',
    tag: null,
    usePhoto: true,
  },
  {
    icon: Users,
    title: 'Pocket Meetups',
    description: 'Coffee with 10 of your people. No stage, no agenda — just product folk talking honestly.',
    photo: '/photos/canada-pocket-meetup-1.jpeg',
    objectPos: 'object-top',
    tag: 'Organized by community members',
    usePhoto: true,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Channel',
    description: 'The always-on async layer. Job leads, framework debates, salary check-ins.',
    photo: null,
    objectPos: 'object-center',
    tag: null,
    usePhoto: false,  // Uses WhatsApp mock instead
  },
  {
    icon: Youtube,
    title: 'YouTube Library',
    description: 'Conversations with Marty Cagan, Ravi Mehta, Pawel Huryn, and more. The kind you bookmark and rewatch.',
    photo: 'https://img.youtube.com/vi/j3u1RIhK6GM/hqdefault.jpg',
    objectPos: 'object-center',
    tag: null,
    usePhoto: true,
  },
  {
    icon: FileText,
    title: 'Resume Reviews',
    description: 'Dedicated sessions for Pakistani PMs navigating the North American job market.',
    photo: '/photos/canada-panel.jpg',
    objectPos: 'object-top',
    tag: 'Canada chapter',
    usePhoto: true,
  },
  {
    icon: Zap,
    title: 'Sochathons',
    description: 'Community-run hackathons where teams solve real problems in a day. Product of Tomorrow — where attendees prototyped the future of a product — is a crowd favourite.',
    photo: '/photos/islamabad-product-of-tomorrow-1.jpeg',
    objectPos: 'object-center',
    tag: 'Annual event',
    usePhoto: true,
  },
]

export default function CommunityLife() {
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.05)

  return (
    <section className="py-24 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            What happens at{' '}
            <span className="text-primary">Product Soch?</span>
          </h2>
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {activities.map((activity, i) => {
            const Icon = activity.icon
            return (
              <div
                key={activity.title}
                className={`group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-300 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 90}ms`, transition: `opacity 0.6s ${i * 90}ms, transform 0.6s ${i * 90}ms, background-color 0.3s, border-color 0.3s` }}
              >
                {/* Visual strip */}
                <div className="aspect-[3/2] overflow-hidden bg-[#0d1b2a]">
                  {activity.usePhoto && activity.photo ? (
                    <img
                      src={activity.photo}
                      alt={activity.title}
                      className={`w-full h-full object-cover ${activity.objectPos} group-hover:scale-105 transition-transform duration-500`}
                      loading="lazy"
                    />
                  ) : (
                    <WhatsAppMock />
                  )}
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-white">{activity.title}</h3>
                    {activity.tag && (
                      <span className="ml-auto text-[10px] text-primary bg-primary/10 rounded-full px-2 py-0.5 whitespace-nowrap flex-shrink-0">
                        {activity.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{activity.description}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
