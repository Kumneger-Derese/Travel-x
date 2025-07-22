import {
  Navbar,
  Hero,
  Services,
  TopDestination,
  Features,
  Testimonials,
  Sponsor,
  CTA,
  Footer,
} from './components'
import { useTheme } from './context/themeContext'

const App = () => {
  const { isDark } = useTheme()
  console.log({ isDark })

  return (
    <div className={`${isDark ? 'dark' : ''} px-8 bg-white/70 text-slate-700 dark:bg-slate-900 dark:text-white`}>
      <Navbar />
      <Hero />
      <Services />
      <TopDestination />
      <Features />
      <Testimonials />
      <Sponsor />
      <CTA />
      <Footer />

    </div>

  )
}
export default App  