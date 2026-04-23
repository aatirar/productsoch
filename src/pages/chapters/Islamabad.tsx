import ChapterPageTemplate from '../../components/ChapterPageTemplate'

export default function Islamabad() {
  return (
    <ChapterPageTemplate
      name="Islamabad"
      emoji="🏔️"
      country="Pakistan"
      headline="The quiet capital. The sharpest thinkers."
      description={[
        "Islamabad moves differently. Government digitisers, NGO builders, policy-adjacent PMs, and startup founders end up in the same room here, and the conversations are more thoughtful for it.",
        "It's a small chapter by design. Tight, forward-looking, and quietly producing some of the most interesting product thinking in the country.",
      ]}
      photos={[
        { src: '/photos/islamabad-product-of-tomorrow-1.jpeg' },
        { src: '/photos/islamabad-product-of-tomorrow-2.jpeg', tag: 'Sochathon' },
        { src: '/photos/islamabad-product-of-tomorrow-3.jpeg', tag: 'Sochathon' },
        { src: '/photos/islamabad-product-of-tomorrow-4.jpeg', tag: 'Sochathon' },
        { src: '/photos/islamaabd-pocket-meetup.jpeg', tag: 'Pocket Meetup' },
        { src: '/photos/islamabad-meetup.jpeg', tag: 'Soch Café' },
        { src: '/photos/islamabad-pocket-meetup-2.jpeg', tag: 'Pocket Meetup' },
        { src: '/photos/islamabad-soch-cafe.jpeg', tag: 'Soch Café' },
        { src: '/photos/islamabad-soch-cafe-3.jpeg', tag: 'Soch Café' },
      ]}
      metaTitle="Islamabad Chapter | Product Soch | Pakistan's PM Community"
      metaDescription="Join the Product Soch Islamabad chapter: home of Product of Tomorrow, Pakistan's annual PM hackathon. For government tech, startup, and policy-adjacent product managers."
      chapterLead={{
        name: 'Abdul Hannan',
        role: 'Chapter Lead, Islamabad',
        quote: "Product of Tomorrow started here because Islamabad has always been a chapter that thinks ahead. The talent here is quiet, deep, and constantly surprising.",
        photo: '/photos/abdul-hannan-islamabad.jpeg',
      }}
      activities={[
        "Quarterly Soch Cafés: 25–40 people, one sharp speaker",
        "Product of Tomorrow: the annual flagship hackathon",
        "Pocket Meetups for smaller, focused conversations",
        "WhatsApp community",
      ]}
      joinCTA={{
        label: 'Join Islamabad Chapter',
        href: '/apply',
        note: 'Opens a Notion form. Takes 2 minutes.',
      }}
    />
  )
}
