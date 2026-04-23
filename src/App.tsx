import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ChaptersOverview from './pages/ChaptersOverview'
import KarachiChapter from './pages/chapters/Karachi'
import LahoreChapter from './pages/chapters/Lahore'
import IslamabadChapter from './pages/chapters/Islamabad'
import CanadaChapter from './pages/chapters/Canada'
import DubaiChapter from './pages/chapters/Dubai'
import UKChapter from './pages/chapters/UK'
import SaudiArabiaChapter from './pages/chapters/SaudiArabia'
import USAChapter from './pages/chapters/USA'
import Events from './pages/Events'
import Library from './pages/Library'
import Join from './pages/Join'
import Apply from './pages/Apply'
import CanadaApply from './pages/CanadaApply'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chapters" element={<ChaptersOverview />} />
          <Route path="/chapters/karachi" element={<KarachiChapter />} />
          <Route path="/chapters/lahore" element={<LahoreChapter />} />
          <Route path="/chapters/islamabad" element={<IslamabadChapter />} />
          <Route path="/chapters/canada" element={<CanadaChapter />} />
          <Route path="/chapters/dubai" element={<DubaiChapter />} />
          <Route path="/chapters/uk" element={<UKChapter />} />
          <Route path="/chapters/saudi-arabia" element={<SaudiArabiaChapter />} />
          <Route path="/chapters/usa" element={<USAChapter />} />
          <Route path="/events" element={<Events />} />
          <Route path="/library" element={<Library />} />
          <Route path="/join" element={<Join />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/canada/apply" element={<CanadaApply />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
