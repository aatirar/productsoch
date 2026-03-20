import ChapterPageTemplate from '../../components/ChapterPageTemplate'

export default function Lahore() {
  return (
    <ChapterPageTemplate
      name="Lahore"
      emoji="🌸"
      country="Pakistan"
      headline="Garden City meetups and a community that moves like a startup."
      description={[
        "Lahore has a different energy — warmer, more collaborative, with a startup culture that punches above its weight. The PM community here is tight-knit and genuinely supportive.",
        "Home to the 'Product of Tomorrow' flagship event, Lahore chapter punches above its weight.",
      ]}
      photos={[
        '/photos/lahore-session.jpg',
        '/photos/lahore-session-3.jpeg',
        '/photos/lahore-discssion.jpg',
        '/photos/lahore-meetup-aug-2025.jpg',
      ]}
      activities={[
        "Quarterly Soch Cafés in Garden City venues",
        "Product of Tomorrow — the annual flagship event",
        "Pocket Nips organized by members",
        "WhatsApp community for daily connection",
      ]}
      organizers={[
        { name: 'Chapter Lead', role: 'Lahore Chapter Organizer', linkedin: '#' },
      ]}
      joinCTA={{
        label: 'Join Lahore Chapter',
        href: '/apply',
        note: 'Opens a Notion form. Takes 2 minutes.',
      }}
    />
  )
}
