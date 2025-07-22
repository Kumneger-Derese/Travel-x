import { motion } from 'framer-motion'
import { CgPlayButton } from "react-icons/cg"
import HeroImage from '../assets/hero.webp'
import HeroImageDark from '../assets/hero-dark.jpg'
import { useTheme } from '../context/themeContext'

const Hero = () => {
  const { isDark } = useTheme()

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-12 mb-32">
      {/* Left Section */}
      <section className="flex-1/2 sm:mt-8 flex flex-col gap-y-3 h-full">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className=" text-lg font-bold text-amber-600 ">
          {('Best Destinations Around The World').toUpperCase()}
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl font-extrabold">
          Dream, explore<br />
          and chase sun<br />
          beyond all limits
        </motion.h1>

        <p className="py-4 text-gray-600 dark:text-gray-400">
          From ancient highlands to untamed wildlife, find the freedom to explore, connect, and live your greatest adventures in East Africa.
        </p>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minima omnis voluptates sit odit consectetur dicta quasi ipsam aperiam! Eos asperiores earum hic, praesentium facilis

          </p> */}

        <div className="flex items-center gap-x-6">
          <button className="p-3 transition-colors duration-300 rounded-md font-semibold bg-amber-400 hover:bg-amber-800 text-white">
            Find out More
          </button>

          <div className=" flex items-center gap-x-3">
            <button className="bg-red-600/80 hover:bg-red-600 transition-colors duration-300 text-white p-2 rounded-full">
              <CgPlayButton size={32} /></button>
            <span>Play Demo</span>
          </div>
        </div>
      </section>

      {/* Right Section */}
      <section className="flex-1/2 h-full flex justify-center items-center">
        <img src={isDark ? HeroImageDark : HeroImage} alt='HeroImage' className='w-full bg-contain object-center' />
      </section>
    </div>
  )
}
export default Hero