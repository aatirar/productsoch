import ChapterPageTemplate from '../../components/ChapterPageTemplate'

export default function SaudiArabia() {
  return (
    <ChapterPageTemplate
      name="Saudi Arabia"
      emoji="🇸🇦"
      country="Saudi Arabia"
      headline="Pakistani product talent is everywhere in the Kingdom."
      description={[
        "The Saudi chapter is in its early stages — but the community is already there. Pakistani PMs, designers, and product marketers are building across fintech, edtech, and e-commerce in one of the world's fastest-growing markets.",
        "This chapter is being built right now. If you're in Saudi Arabia and want to be part of shaping it, we'd love to have you.",
      ]}
      photos={[
        '/photos/partner-events-notion.jpg',
      ]}
      activities={[
        "Early-stage community building in Saudi Arabia",
        "WhatsApp community for connection and job leads",
        "Virtual events connecting to the broader Product Soch network",
        "Eventual in-person meetups as the community grows",
      ]}
      organizers={[]}
      joinCTA={{
        label: 'Join Saudi Arabia Chapter',
        href: 'https://notion.so',
        note: 'This chapter is growing. Join to help build it.',
      }}
    />
  )
}
