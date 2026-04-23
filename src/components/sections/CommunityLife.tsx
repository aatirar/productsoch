import { Coffee, Users, Monitor, FileText, BookOpen, Zap } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#25D366"/>
      <path d="M34.5 13.5C32.1 11.1 28.9 9.6 25.5 9.6C18.4 9.6 12.6 15.4 12.6 22.5C12.6 24.8 13.2 27 14.4 28.9L12.5 36L19.8 34.1C21.6 35.2 23.5 35.8 25.5 35.8C32.6 35.8 38.4 30 38.4 22.9C38.4 19.5 37 16.3 34.5 13.5ZM25.5 33.5C23.7 33.5 22 33 20.5 32.1L20.1 31.9L15.8 33L17 28.8L16.7 28.4C15.7 26.8 15.1 24.7 15.1 22.5C15.1 16.8 19.8 12.1 25.5 12.1C28.3 12.1 30.9 13.2 32.8 15.1C34.7 17 35.9 19.6 35.9 22.4C35.9 28.2 31.2 33.5 25.5 33.5ZM31.2 25.2C30.9 25 29.4 24.3 29.1 24.2C28.8 24.1 28.6 24 28.4 24.3C28.2 24.6 27.6 25.2 27.5 25.4C27.3 25.6 27.1 25.6 26.8 25.5C26.5 25.3 25.5 25 24.4 24C23.5 23.2 22.9 22.2 22.7 21.9C22.5 21.6 22.7 21.4 22.9 21.2C23.1 21 23.3 20.8 23.4 20.6C23.5 20.4 23.6 20.3 23.7 20.1C23.8 19.9 23.7 19.7 23.6 19.5C23.5 19.3 22.9 17.8 22.7 17.3C22.5 16.8 22.2 16.8 22 16.8H21.5C21.3 16.8 21 16.9 20.7 17.2C20.4 17.5 19.7 18.2 19.7 19.7C19.7 21.2 20.8 22.6 20.9 22.8C21.1 23 22.9 25.8 25.7 27.1C28.5 28.4 28.5 27.9 29.1 27.9C29.7 27.9 31 27.2 31.3 26.5C31.5 25.9 31.5 25.4 31.2 25.2Z" fill="white"/>
    </svg>
  )
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="28" width="8" height="8" rx="4" fill="#E01E5A"/>
      <rect x="10" y="18" width="8" height="8" rx="4" fill="#E01E5A"/>
      <rect x="20" y="18" width="8" height="8" rx="4" fill="#E01E5A"/>
      <rect x="10" y="8" width="8" height="8" rx="4" fill="#36C5F0"/>
      <rect x="20" y="8" width="8" height="8" rx="4" fill="#36C5F0"/>
      <rect x="30" y="8" width="8" height="8" rx="4" fill="#36C5F0"/>
      <rect x="30" y="18" width="8" height="8" rx="4" fill="#2EB67D"/>
      <rect x="20" y="28" width="8" height="8" rx="4" fill="#2EB67D"/>
      <rect x="30" y="28" width="8" height="8" rx="4" fill="#2EB67D"/>
      <rect x="20" y="38" width="8" height="8" rx="4" fill="#ECB22E"/>
      <rect x="30" y="38" width="8" height="8" rx="4" fill="#ECB22E"/>
    </svg>
  )
}

function CardImage({ photo, objectPos, alt }: { photo?: string; objectPos?: string; alt: string }) {
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
                description: 'Coffee with 10 of your people. No stage, no agenda. Just product folk talking honestly.',
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
                photo: '/photos/resume-review-1.jpeg',
                objectPos: 'object-center',
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
                description: 'Community-run hackathons where teams solve real problems in a day. Product of Tomorrow, where attendees prototyped the future of a product, is a crowd favourite.',
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
                title: 'WhatsApp Channel',
                description: 'The always-on async layer. Job leads, framework debates, salary check-ins.',
                bgColor: 'bg-[#075E54]',
                Icon: WhatsAppIcon,
              },
              {
                title: 'Slack Workspace',
                description: 'Dedicated channels by city, topic, and career stage. The place for longer conversations.',
                bgColor: 'bg-[#4A154B]',
                Icon: SlackIcon,
              },
            ].map((item, i) => {
              const Icon = item.Icon
              return (
                <div
                  key={item.title}
                  className={`group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-300 ${networkVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 90}ms`, transition: `opacity 0.6s ${i * 90}ms, transform 0.6s ${i * 90}ms, background-color 0.3s, border-color 0.3s` }}
                >
                  <div className="flex items-center gap-4 p-5">
                    <div className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-base leading-relaxed">{item.description}</p>
                    </div>
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
