import { Helmet } from 'react-helmet-async'
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
      <Helmet>
        <title>Product Soch | Pakistan's Product Management Community</title>
        <meta name="description" content="Product Soch is Pakistan's premier product management community. 1,000+ members across Karachi, Lahore, Islamabad, Canada, Dubai, and beyond. Free to join, forever." />
        <meta property="og:title" content="Product Soch | Pakistan's Product Management Community" />
        <meta property="og:description" content="Join 1,000+ Pakistani product managers across 6 global chapters. Soch Cafés, pocket meetups, and the Product of Tomorrow hackathon. Free to join, forever." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://productsoch.com" />
        <link rel="canonical" href="https://productsoch.com" />
      </Helmet>
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
