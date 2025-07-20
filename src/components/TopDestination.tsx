import { destinationsData } from "../constants/destinationsData"
import { HiPaperAirplane } from "react-icons/hi2"

const TopDestination = () => {
  return (
    <div className="my-24 scroll-smooth" id="destinations">
      <h2 className="text-center text-lg font-bold text-amber-600 ">
        {('Top Selling').toUpperCase()}
      </h2>

      <h1 className="text-center text-4xl font-bold mb-16">
        Top Destinations
      </h1>

      <ul className="grid place-items-center lg:place grid-cols-1 gap-y-8 gap-x-4 lg:8 sm:grid-cols-2 lg:grid-cols-3">
        {
          destinationsData.map((destination) => (
            <div key={destination.id} className="size-72 border bg-slate-50/50 border-slate-300 rounded-lg xl:size-80">
              <img src={destination.img} className="h-[70%] w-full mx-auto rounded-t-lg" alt={'Travel to' + destination.place.city} />

              {/* Place Iteration */}
              <div className="flex justify-between items-center px-3 py-1.5">
                <div className="flex pr-1">
                  <span className="pr-1"> {destination.place.city} </span>
                  <span className="font-semibold">{destination.place.country}</span>
                </div>

                <p>${destination.price}k</p>
              </div>

              <div className="flex items-center gap-2 px-3 pt-1">
                <HiPaperAirplane className="-rotate-45" size={24} /> <span>{destination.numberOfDays} Days trip</span>
              </div>

            </div>
          ))
        }
      </ul>

    </div>
  )
}
export default TopDestination