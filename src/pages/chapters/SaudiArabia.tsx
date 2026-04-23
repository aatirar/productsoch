import ChapterPageTemplate from '../../components/ChapterPageTemplate'

export default function SaudiArabia() {
  return (
    <ChapterPageTemplate
      name="Saudi Arabia"
      emoji="🇸🇦"
      country="Saudi Arabia"
      headline="The community the Kingdom was missing."
      description={[
        "Pakistani product professionals have been building across the Gulf for years, across fintech, edtech, and e-commerce, in one of the world's fastest-growing markets. The community just hadn't caught up yet.",
        "This chapter is being built right now. If you're in Saudi Arabia and want to help shape it, we'd love to have you at the table.",
      ]}
      photos={[
        { src: '/photos/partner-events-notion.jpg' },
        { src: '/photos/ksa-pocket-meetup.jpeg', tag: 'Pocket Meetup' },
      ]}
      metaTitle="Saudi Arabia Chapter | Product Soch | Pakistani PMs in KSA"
      metaDescription="Join the Product Soch Saudi Arabia chapter: a growing community for Pakistani product managers in the Kingdom. Connect with PMs across fintech, edtech, and e-commerce."
      activities={[
        "Early-stage community building in Saudi Arabia",
        "WhatsApp community for connection and job leads",
        "Virtual events connecting to the broader Product Soch network",
        "Eventual in-person meetups as the community grows",
      ]}
      chapterLead={{
        name: 'Sarrah Moiz',
        role: 'Chapter Lead, Saudi Arabia',
        quote: "Pakistani product talent has always been in the Gulf. We're just finally building the community to go with it.",
        photo: '/photos/sarrah-moiz-ksa.jpeg',
      }}
      joinCTA={{
        label: 'Join Saudi Arabia Chapter',
        href: '/apply',
        note: 'This chapter is growing. Join to help build it.',
      }}
    />
  )
}
