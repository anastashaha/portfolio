import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Section from './pages/Section.jsx'
import Project from './pages/Project.jsx'
import WashiBackground from './components/WashiBackground.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <WashiBackground />
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/selected work" element={<Section section="selected work" />} />
        <Route path="/selected work/:slug" element={<Project section="selected work" />} />

        <Route path="/making" element={<Section section="making" />} />
        <Route path="/making/:slug" element={<Project section="making" />} />
        
        <Route path="/teaching" element={<Section section="teaching" />} />
        <Route path="/teaching/:slug" element={<Project section="teaching" />} />


      </Routes>
    </BrowserRouter>
  )
}
