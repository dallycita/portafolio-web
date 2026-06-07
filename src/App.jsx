import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Architecture from './components/Architecture'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Architecture />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
