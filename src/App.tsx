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

const App = () => {
  return (
    <div className="px-8 xl:px-32 bg-white text-slate-900 ">
    {/* <div className="px-8 bg-white text-slate-900 dark:bg-slate-900 dark:text-white"> */}
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