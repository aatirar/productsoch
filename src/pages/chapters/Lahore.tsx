import ChapterPageTemplate from '../../components/ChapterPageTemplate'

export default function Lahore() {
  return (
    <ChapterPageTemplate
      name="Lahore"
      emoji="🌸"
      country="Pakistan"
      headline="Deep roots. Honest conversations."
      description={[
        "Lahore's product community takes its time and gets it right. PMs from some of Pakistan's brightest startups gather here not to network, but to actually talk: about what building products looks like, what failing looks like, and what comes next.",
        "Collaborative, curious, and grounded. The kind of chapter where the conversation keeps going long after the session ends.",
      ]}
      photos={[
        { src: '/photos/lahore-session.jpg' },
        { src: '/photos/lahore-session-3.jpeg', tag: 'Soch Café' },
        { src: '/photos/lahore-discssion.jpg', tag: 'Pocket Meetup' },
        { src: '/photos/lahore-meetup-aug-2025.jpg', tag: 'Soch Café' },
        { src: '/photos/lahore-soch-cafe-feb-2025.jpg', tag: 'Soch Café' },
        { src: '/photos/lahore-soch-cafe-4.jpg', tag: 'Soch Café' },
        { src: '/photos/lahore-soch-cafe-5.jpg', tag: 'Soch Café' },
        { src: '/photos/lahore-soch-cafe-at-devsinc.jpg', tag: 'Soch Café' },
        { src: '/photos/lahore-soch-cafe-at-mindstorm-studios.jpg', tag: 'Soch Café' },
        { src: '/photos/lahore-soch-cafe-session-mindstorm.jpg', tag: 'Soch Café' },
      ]}
      metaTitle="Lahore Chapter | Product Soch | Pakistan's PM Community"
      metaDescription="Join the Product Soch Lahore chapter: warm, collaborative product management meetups in Lahore. Soch Cafés, pocket meetups, and the annual Product of Tomorrow hackathon."
      chapterLead={{
        name: 'Hassan Zia',
        role: 'Chapter Lead, Lahore',
        quote: "What makes Lahore special is the quality of conversation. People here are genuinely curious, genuinely collaborative, and building things that actually matter.",
        photo: '/photos/hassan-zia-lahore.webp',
      }}
      activities={[
        "Quarterly Soch Cafés: 25–40 people, one sharp speaker",
        "Product of Tomorrow: the annual flagship hackathon",
        "Pocket Meetups organized by members",
        "WhatsApp community for daily connection",
      ]}
      joinCTA={{
        label: 'Join Lahore Chapter',
        href: '/apply',
        note: 'Opens a Notion form. Takes 2 minutes.',
      }}
    />
  )
}
