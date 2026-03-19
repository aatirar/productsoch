import Hero from '../components/sections/Hero'
import Mission from '../components/sections/Mission'
import SocialProof from '../components/sections/SocialProof'
import ChapterCards from '../components/sections/ChapterCards'
import CommunityLife from '../components/sections/CommunityLife'
import ClipsSection from '../components/sections/ClipsSection'
import YouTubePreview from '../components/sections/YouTubePreview'
import EventsSpotlight from '../components/sections/EventsSpotlight'
import FinalCTA from '../components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <SocialProof />
      <ChapterCards />
      <CommunityLife />
      <ClipsSection />
      <YouTubePreview />
      <EventsSpotlight />
      <FinalCTA />
    </>
  )
}
