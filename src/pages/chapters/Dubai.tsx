import ChapterPageTemplate from '../../components/ChapterPageTemplate'

export default function Dubai() {
  return (
    <ChapterPageTemplate
      name="Dubai"
      emoji="🏙️"
      country="UAE"
      headline="Shaping the Gulf product landscape."
      description={[
        "Pakistani product talent has always been a force in the Gulf, and the Dubai chapter is where that talent finds its community.",
        "From fintech to proptech to e-commerce, this chapter connects PMs across industries who are building some of the most ambitious products in the region.",
      ]}
      photos={[
        { src: '/photos/dubai-session.jpg' },
        { src: '/photos/dubai-session-2.jpg', tag: 'Soch Café' },
        { src: '/photos/pocket-meetup.jpg', tag: 'Pocket Meetup' },
      ]}
      activities={[
        "Soch Cafés with the Gulf PM community",
        "Cross-industry discussions on building in the Gulf",
        "WhatsApp community for job leads and networking",
        "Connections to the broader Product Soch network",
      ]}
      joinCTA={{
        label: 'Join Dubai Chapter',
        href: '/apply',
        note: 'Opens a Notion form. Takes 2 minutes.',
      }}
    />
  )
}
