import ChapterPageTemplate from '../../components/ChapterPageTemplate'

export default function USA() {
  return (
    <ChapterPageTemplate
      name="USA"
      emoji="🇺🇸"
      country="United States"
      headline="The world's biggest product market. We're building our presence in it."
      description={[
        "The USA chapter is emerging, connecting Pakistani product professionals across the coasts who are building in Silicon Valley, New York, Austin, and beyond.",
        "Whether you're navigating your first US PM role or five years deep in FAANG, this community is being built for you. Join early and help shape it.",
      ]}
      photos={[
        { src: '/photos/partner-events-notion.jpg' },
      ]}
      activities={[
        "Early-stage community building across major US cities",
        "Virtual events and career discussions",
        "WhatsApp community for job leads and networking",
        "Connections to the broader Product Soch global network",
      ]}
      joinCTA={{
        label: 'Join USA Chapter',
        href: '/apply',
        note: 'This chapter is growing. Join to help build it.',
      }}
    />
  )
}
