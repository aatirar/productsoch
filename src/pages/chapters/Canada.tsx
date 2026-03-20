import ChapterPageTemplate from '../../components/ChapterPageTemplate'

export default function Canada() {
  return (
    <ChapterPageTemplate
      name="Canada"
      emoji="🍁"
      country="Canada"
      headline="Same drive. Different timezone."
      description={[
        "The Canada chapter exists for Pakistani PMs who've made the move — or are in the middle of making it. Navigating a North American job market is hard. Navigating it without community is harder.",
        "We run resume review sessions, career nights, and regular meetups that feel like home. Whether you're fresh off the plane or five years into your Canadian career, there's a seat for you here.",
      ]}
      photos={[
        '/photos/canada-session.jpg',
        '/photos/canada-session-3.jpg',
        '/photos/canada-panel.jpg',
        '/photos/canada-pocket-1.jpg',
        '/photos/canada-picnic-1.jpeg',
        '/photos/canada-session-7.jpg',
        '/photos/canada-session-8.jpg',
      ]}
      activities={[
        "Resume review clinics for North American job market",
        "Career nights with hiring managers and senior PMs",
        "Regular chapter meetups in major Canadian cities",
        "WhatsApp community for job leads and immigration questions",
        "Mentorship connections for new arrivals",
        "Virtual events for members across different provinces",
      ]}
      organizers={[
        { name: 'Canada Lead', role: 'Canada Chapter Organizer', linkedin: '#' },
      ]}
      joinCTA={{
        label: 'Join Canada Chapter',
        href: '/canada/apply',
        note: 'Canada has a dedicated join process — separate from the Pakistan Notion form.',
      }}
      isCanada={true}
    />
  )
}
