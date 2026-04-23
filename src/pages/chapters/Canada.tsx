import ChapterPageTemplate from '../../components/ChapterPageTemplate'

export default function Canada() {
  return (
    <ChapterPageTemplate
      name="Canada"
      emoji="🍁"
      country="Canada"
      headline="Real talk for every stage of your Canadian PM career."
      description={[
        "The Canada chapter brings together Pakistani product professionals navigating one of the world's most competitive job markets, including PMs, designers, and PMMs across fintech, healthtech, enterprise SaaS, and beyond.",
        "Whether you arrived last month or five years ago, this community helps you find your footing with people who've already walked the path.",
      ]}
      photos={[
        { src: '/photos/canada-session.jpg' },
        { src: '/photos/canada-session-3.jpg', tag: 'Soch Café' },
        { src: '/photos/canada-panel.jpg', tag: 'Panel' },
        { src: '/photos/canada-pocket-1.jpg', tag: 'Pocket Meetup' },
        { src: '/photos/canada-picnic-1.jpeg', tag: 'Community Picnic' },
        { src: '/photos/canada-picnic-2.jpeg', tag: 'Community Picnic' },
        { src: '/photos/canada-session-7.jpg', tag: 'Soch Café' },
        { src: '/photos/canada-session-8.jpg', tag: 'Resume Review' },
        { src: '/photos/canada-session-4.jpeg', tag: 'Soch Café' },
        { src: '/photos/canada-session-5.jpeg', tag: 'Soch Café' },
        { src: '/photos/canada-session-6.jpg', tag: 'Soch Café' },
        { src: '/photos/canada-pocket-meetup-1.jpeg', tag: 'Pocket Meetup' },
        { src: '/photos/canada-hangout.jpg', tag: 'Community Hangout' },
        { src: '/photos/canada-speaker-2.jpeg', tag: 'Speaker Session' },
      ]}
      metaTitle="Canada Chapter | Product Soch | Pakistani PMs in Canada"
      metaDescription="Join the Product Soch Canada chapter: a community for Pakistani product managers navigating North America. Resume clinics, career nights, and mentorship across Canadian cities."
      chapterLead={{
        name: 'Muneera Qureshi',
        role: 'Chapter Lead, Canada',
        quote: "The Canadian chapter exists because no one should navigate this landscape alone. Whether you arrived last month or five years ago, there's a place for you here.",
        photo: '/photos/muneera-qureshi.jpeg',
      }}
      activities={[
        "Resume review clinics for the North American job market",
        "Career nights with hiring managers and senior PMs",
        "Regular chapter meetups in major Canadian cities",
        "WhatsApp community for job leads and immigration questions",
        "Mentorship connections for new arrivals",
        "Virtual events for members across different provinces",
      ]}
      joinCTA={{
        label: 'Join Canada Chapter',
        href: '/canada/apply',
        note: 'Canada has a dedicated join process, separate from the Pakistan Notion form.',
      }}
      isCanada={true}
    />
  )
}
