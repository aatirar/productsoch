import ChapterPageTemplate from '../../components/ChapterPageTemplate'

export default function Karachi() {
  return (
    <ChapterPageTemplate
      name="Karachi"
      emoji="🌊"
      country="Pakistan"
      headline="Pakistan's product capital. Built in the chaos."
      description={[
        "Karachi doesn't slow down, and neither do the product people building inside it. Direct, opinionated, and allergic to theory, this community reflects the city: sharp, scrappy, and always moving.",
        "With the highest density of tech companies, startups, and enterprise product teams in Pakistan, there's no shortage of people who get it, and even fewer excuses not to find your people here.",
      ]}
      heroObjectPosition="object-bottom"
      photos={[
        { src: '/photos/karachi-session.jpg' },
        { src: '/photos/karachi-session-2.jpeg', tag: 'Soch Café' },
        { src: '/photos/karachi-discussion.jpg', tag: 'Pocket Meetup' },
        { src: '/photos/karachi-discussion-2.jpg', tag: 'Soch Café' },
        { src: '/photos/karachi-discussion-3.jpg', tag: 'Pocket Meetup' },
        { src: '/photos/karachi-session-5.jpg', tag: 'Soch Café' },
        { src: '/photos/karachi-disccusion-4.jpg', tag: 'Pocket Meetup' },
        { src: '/photos/karachi-soch-cafe-2.jpg', tag: 'Soch Café' },
        { src: '/photos/karachi-soch-cafe-3.jpg', tag: 'Soch Café' },
      ]}
      metaTitle="Karachi Chapter | Product Soch | Pakistan's PM Community"
      metaDescription="Join the Product Soch Karachi chapter, Pakistan's most active product management community. Soch Cafés, pocket meetups, and a WhatsApp network for PMs in Karachi."
      chapterLead={{
        name: 'Zain Ahmed',
        role: 'Chapter Lead, Karachi',
        quote: "Karachi never slows down, and neither do its product people. Every session reminds me why we built this. The energy in the room is unlike anything else.",
        photo: '/photos/zain-ahmed-karachi.jpeg',
      }}
      activities={[
        "Quarterly Soch Cafés: 25–40 people, one sharp speaker",
        "Pocket Meetups: intimate coffee meetups organized by members",
        "WhatsApp community for job leads and daily discussion",
        "One-off workshops and framework deep-dives",
      ]}
      joinCTA={{
        label: 'Join Karachi Chapter',
        href: '/apply',
        note: 'Opens a Notion form. Takes 2 minutes.',
      }}
    />
  )
}
