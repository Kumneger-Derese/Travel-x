import { useState } from "react"
import { BsQuote } from "react-icons/bs"
import { HiChevronDown, HiChevronUp } from "react-icons/hi2"
import { testimonialsData } from "../constants/testimonialData"

const Testimonials = () => {
  const [index, setIndex] = useState(0)

  const totalTestimonials = testimonialsData.length - 1

  const handleNext = () => {
    setIndex((prev) => {
      if (prev === totalTestimonials) {
        return 0
      } else {
        return prev + 1
      }
    })
  }

  const handlePrev = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return totalTestimonials
      } else {
        return prev - 1
      }
    })
  }

  return (
    <div className="my-32 flex flex-col md:flex-row gap-2">
      {/* Left Section */}
      <section className="flex-1/2 flex flex-col" >
        <h2 className="text-lg font-bold text-amber-600">TESTIMONIALS</h2>

        <h1 className="text-4xl font-bold">
          What People Say <br />
          About Us.
        </h1>

        <div className="flex ml-2 gap-x-4 items-center mt-12">
          {
            [0, 1, 2, 3, 4].map((idx, index) => (
              <p key={index} className={`size-2.5 ${idx === index && ' bg-orange-600'} bg-orange-200 rounded-full`} />
            ))
          }

        </div>

      </section>

      {/* Right Section */}
      <section className="flex-1/2 flex flex-col sm:flex-row gap-y-4 sm:gap-4 sm:mx-4">
        <div className="border border-slate-400 rounded-xl m-8 shadow-xl p-3 flex-1">
          <div className="mx-auto">
            <img src={testimonialsData[index].image} alt="profilpic" className="size-20 mx-auto rounded-full" />
          </div>

          <p className="my-4 text-gray-600 dark:text-gray-400">
            <BsQuote className="inline-block text-justify" /> {' '}
            {testimonialsData[index].review}{' '}
            <BsQuote className="rotate-180 inline-block" />
          </p>

          <h1 className="font-bold text-gray-600 dark:text-gray-500">{testimonialsData[index].name}</h1>
          <h3 className="font-bold text-sm text-gray-400">{testimonialsData[index].position}</h3>
        </div>

        <div
          className="flex flex-row px-8 justify-between sm:flex-col items-center sm:justify-center gap-y-8 w-full sm:w-8 text-slate-900">
          <HiChevronUp
            size={32}
            strokeWidth={1.5}
            onClick={handlePrev}
            className="-rotate-90 sm:rotate-0 hover:bg-gray-400  bg-gray-100 rounded-full text-3xl p-2"
          />

          <HiChevronDown
            size={32}
            strokeWidth={1.5}
            onClick={handleNext} className="-rotate-90 sm:rotate-0 hover:bg-gray-400 bg-gray-100 rounded-full text-3xl p-2"
          />
        </div>
      </section>
    </div>
  )
}
export default Testimonials