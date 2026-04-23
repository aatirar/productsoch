import ChapterPageTemplate from '../../components/ChapterPageTemplate'

export default function UK() {
  return (
    <ChapterPageTemplate
      name="UK & Ireland"
      emoji="🇬🇧"
      country="United Kingdom & Ireland"
      headline="Navigating one of the world's most competitive markets."
      description={[
        "The UK & Ireland chapter is early stage but growing. For Pakistani PMs navigating the London tech scene and beyond, one of the most competitive PM markets in the world.",
        "This chapter is being built right now. If you're in the UK or Ireland and want to be part of building it, we'd love to hear from you.",
      ]}
      activities={[
        "Early-stage community building across the UK & Ireland",
        "WhatsApp community for connection and job leads",
        "Eventual meetups as the community grows",
        "Connections to the global Product Soch network",
      ]}
      photos={[
        { src: '/photos/partner-events-notion.jpg' },
      ]}
      joinCTA={{
        label: 'Join UK & Ireland Chapter',
        href: '/apply',
        note: 'This chapter is growing. Join to be part of building it.',
      }}
    />
  )
}
