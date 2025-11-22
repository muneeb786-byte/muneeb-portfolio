
import Hero from '../components/Hero'
import RecentProjects from '../components/RecentWork'
import Experience from '../components/Experience'
import Services from '../components/Services'
import Workspace from '../components/Workspace'
import Logos from '../components/Logos'
import About from '../components/About'
import Talk from '../components/Talk'


const Homepage = () => {
  return (
    <section>
      <Hero />
      <Logos />
      <RecentProjects />
      <About />
      <Experience />
      <Services />
      <Talk />
      <Workspace />
    </section>
  )
}

export default Homepage