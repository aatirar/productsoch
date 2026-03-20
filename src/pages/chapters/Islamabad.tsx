import ChapterPageTemplate from '../../components/ChapterPageTemplate'

export default function Islamabad() {
  return (
    <ChapterPageTemplate
      name="Islamabad"
      emoji="🏔️"
      country="Pakistan"
      headline="A tight-knit crowd with a government-tech edge."
      description={[
        "Islamabad's PM community is smaller but sharper. With government digitization, NGO tech, and a growing startup scene, the chapter has a unique perspective on building for public impact.",
        "Expect thoughtful discussions, a genuine mix of sectors, and a crowd that actually reads before they show up.",
      ]}
      photos={[
        '/photos/islamabad-product-of-tomorrow-1.jpeg',
        '/photos/islamabad-product-of-tomorrow-2.jpeg',
        '/photos/islamabad-product-of-tomorrow-3.jpeg',
        '/photos/islamabad-product-of-tomorrow-4.jpeg',
        '/photos/islamaabd-pocket-meetup.jpeg',
      ]}
      activities={[
        "Quarterly meetups in Islamabad",
        "Government and civic tech discussions",
        "Pocket Nips for smaller, focused conversations",
        "WhatsApp community",
      ]}
      organizers={[
        { name: 'Chapter Lead', role: 'Islamabad Chapter Organizer', linkedin: '#' },
      ]}
      joinCTA={{
        label: 'Join Islamabad Chapter',
        href: '/apply',
        note: 'Opens a Notion form. Takes 2 minutes.',
      }}
    />
  )
}
