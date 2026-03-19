import ChapterPageTemplate from '../../components/ChapterPageTemplate'

export default function Dubai() {
  return (
    <ChapterPageTemplate
      name="Dubai"
      emoji="🏙️"
      country="UAE"
      headline="Where Pakistani PMs land on their way up."
      description={[
        "Dubai is a hub — for ambition, for the Gulf PM scene, and increasingly for Pakistani product talent. The chapter is built around the unique experience of building products in a fast-moving market.",
        "Expect a mix of startup and enterprise PMs, sharp discussions about the Gulf context, and a network that spans multiple industries.",
      ]}
      photos={[
        '/photos/dubai-session.jpg',
        '/photos/dubai-session-2.jpg',
        '/photos/pocket-meetup.jpg',
      ]}
      activities={[
        "Meetups in Dubai with the Gulf PM community",
        "Cross-industry discussions on building in the Gulf",
        "WhatsApp community for job leads and networking",
        "Connections to the broader Product Soch network",
      ]}
      organizers={[
        { name: 'Dubai Lead', role: 'Dubai Chapter Organizer', linkedin: '#' },
      ]}
      joinCTA={{
        label: 'Join Dubai Chapter',
        href: 'https://notion.so',
        note: 'Opens a Notion form. Takes 2 minutes.',
      }}
    />
  )
}
