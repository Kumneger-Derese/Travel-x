import { motion } from "framer-motion"
import { serviceData } from "../constants/serviceData"
import { itemVariants, listVariants } from './variant'

const Services = () => {

  return (
    <div className="my-32">
      <h2 className="text-center text-lg font-bold text-amber-600 ">
        {('Category').toUpperCase()}
      </h2>

      <h1 className="text-center text-4xl font-bold mb-16">
        We Offer Best Services
      </h1>

      <motion.ul
        initial={'hidden'} whileInView={'visible'} variants={listVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 place-items-center">
        {
          serviceData.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="hover:shadow-xl p-4 basis-56 size-72 md:size-56 xl:size-72 border border-slate-300 rounded-2xl">
              <img
                src={service.iamge}
                alt={service.title + 'image'}
                className="size-14 my-4 mx-auto rounded-full"
              />
              <h1 className="font-bold text-center">{service.title}</h1>
              <p className="text-center text-gray-600 dark:text-gray-400">{service.content}</p>
            </motion.div>
          ))
        }
      </motion.ul>
    </div>
  )
}
export default Services