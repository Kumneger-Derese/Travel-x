import { serviceData } from "../constants/serviceData"

const Services = () => {
  return (
    <div className="my-32">
      <h2 className="text-center text-lg font-bold text-amber-600 ">
        {('Category').toUpperCase()}
      </h2>

      <h1 className="text-center text-4xl font-bold mb-16">
        We Offer Best Services
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 place-items-center">
        {
          serviceData.map((service) => (
            <div key={service.id} className="hover:shadow-xl p-4 basis-56 size-72 md:size-56 xl:size-72 border border-slate-300 rounded-2xl">
              <img src={service.iamge} className="size-14 my-4 mx-auto rounded-full" alt={service.title + 'image'} />
              <h1 className="font-bold text-center">{service.title}</h1>
              <p className="text-center text-gray-600">{service.content}</p>
            </div>
          ))
        }
      </ul>
    </div>
  )
}
export default Services