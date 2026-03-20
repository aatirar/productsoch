import ChapterPageTemplate from '../../components/ChapterPageTemplate'

export default function Karachi() {
  return (
    <ChapterPageTemplate
      name="Karachi"
      emoji="🌊"
      country="Pakistan"
      headline="The city that runs on hustle."
      description={[
        "Karachi is where Product Soch started. The original Soch Café energy: fast conversations, strong chai, and a room full of people who build things for a living.",
        "It's the densest PM ecosystem in Pakistan, with tech companies, startups, and enterprise product teams all in one city. Karachi chapter events reliably fill up fast.",
      ]}
      photos={[
        '/photos/karachi-session.jpg',
        '/photos/karachi-session-2.jpeg',
        '/photos/karachi-discussion.jpg',
        '/photos/karachi-discussion-2.jpg',
        '/photos/karachi-discussion-3.jpg',
        '/photos/karachi-session-5.jpg',
      ]}
      activities={[
        "Quarterly Soch Cafés — 80–150 people, one sharp speaker",
        "Pocket Nips — intimate coffee meetups organized by members",
        "WhatsApp community for job leads and daily discussion",
        "One-off workshops and framework deep-dives",
        "Annual 'Product of Tomorrow' flagship event",
      ]}
      organizers={[
        { name: 'Chapter Organizer', role: 'Karachi Chapter Lead', linkedin: '#' },
      ]}
      joinCTA={{
        label: 'Join Karachi Chapter',
        href: '/apply',
        note: 'Opens a Notion form. Takes 2 minutes.',
      }}
    />
  )
}
