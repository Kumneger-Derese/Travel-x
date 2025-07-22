const Footer = () => {
  return (
    <div className="mt-32 md:h-64 py-8 px-4 place-items-center place-content-center gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-gray-50/10 font-medium border-t border-t-slate-300">
      <div>
        <a href="/" className="font-bold text-2xl lg:text-3xl text-slate-700 dark:text-slate-400"> Travel-<span className="italic text-amber-400">X</span></a>
        <p className="my-4 font-bold italic">Explore More, Worry Less</p>
      </div>

      {/* Company */}
      <div className=" flex flex-col justify-center items-center">
        <h1 className="font-bold text-xl">Company</h1>
        <h3>About</h3>
        <h3>Carees</h3>
        <h3>Mobile</h3>
      </div>

      {/* Contact */}
      <div className=" flex flex-col justify-center items-center">
        <h1 className="font-bold text-xl">Contact</h1>
        <h3>Help</h3>
        <h3>Press</h3>
        <h3>Affliates</h3>
      </div>

      {/* More */}
      <div className=" flex flex-col justify-center items-center">
        <h1 className="font-bold text-xl">More</h1>
        <h3>Airlinefees</h3>
        <h3>Airline</h3>
        <h3>Trip tips</h3>
      </div>
    </div>
  )
}
export default Footer