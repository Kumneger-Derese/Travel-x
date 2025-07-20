const CTA = () => {
  return (
    <div className="my-32 h-96 flex flex-col justify-center items-center p-4 sm:p-16 md:p-24 xl:p-64 bg-gray-100 rounded-xl rounded-tl-4xl relative overflow-clip">
      <h1 className="font-bold text-xl sm:text-3xl mb-4 text-center">Subscribe to get information, latest news and other  interesting offers about Travel
      </h1>

      <div className="mx-auto flex flex-col items-center sm:flex-row gap-4 w-full sm:w-4/6">
        <input
          type="email"
          className="bg-white border focus:outline focus:border-none focus:outline-orange-500 border-slate-300 p-2 w-full sm:w-4/6 rounded-md"
          placeholder={'Your email'}
        />

        <button className="bg-orange-500  w-full sm:w-2/6 text-white font-bold rounded-lg border-none px-4 py-2">Subscribe</button>
      </div>

      {/* soft brush */}
      <div className="absolute bg-orange-500  left-0 bottom-0 size-16 sm:size-24 blur-lg sm:blur-2xl " />
      <div className="absolute bg-yellow-500  right-0 top-0 size-16 sm:size-24 blur-lg sm:blur-2xl " />
    </div>
  )
}
export default CTA