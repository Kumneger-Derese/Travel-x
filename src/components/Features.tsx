import { featuresData } from "../constants/featuresData"
import Harar from '../assets/Harar.png'
import Axum from '../assets/axum.png'
import { BiLeaf } from "react-icons/bi"
import { HiMap } from "react-icons/hi"
import { CiPaperplane } from "react-icons/ci"
import { MdOutlineMapsHomeWork } from "react-icons/md"
import { HiOutlineHeart } from "react-icons/hi2"

const Features = () => {
  return (
    <div className="my-32 flex flex-col md:flex-row gap-y-16">
      {/* Left Section */}
      <section className="flex-1/2 flex flex-col gap-y-4">
        <h2 className="text-lg font-bold text-amber-600 -mb-4">EASY AND FAST</h2>

        <h1 className="text-4xl font-bold">
          Book Your Next Trip <br />
          In 3 Easy Steps
        </h1>

        <ul className="flex flex-col gap-y-4">
          {
            featuresData.map(({ id, icon: Icon, title, content, color }) => (
              <li key={id} className="flex gap-x-3 items-center">
                <div style={{ backgroundColor: color }} className="rounded-md p-2 text-white">
                  <Icon size={32} className={`${id === 3 && 'rotate-45'}`} />
                </div>

                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-md mr-8">{content}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </section>

      {/* Right Section */}
      <section className="flex-1/2 flex relative">
        {/* <div className=" size-64 bg-gradient-to-br rounded-full from-indigo-500/50 absolute inset-0 to-purple-600/50 blur-3xl -z-10"/> */}

        <div className="m-4 lg:m-16 border p-3 border-slate-300 rounded-3xl shadow-2xl shadow-blue-300">

          <img src={Harar} alt="" className="rounded-3xl" />

          <h1 className="font-bold mt-2">Trip to Harar</h1>
          <p className="text-gray-500">20-19 December | by Nigus Tashome</p>
          <div className="px-2 flex gap-x-4 m-4">
            <BiLeaf className="bg-gray-100 p-2 text-gray-500  text-3xl rounded-full" />
            <HiMap className="bg-gray-100 p-2 text-gray-500  text-3xl rounded-full" />
            <CiPaperplane className="bg-gray-100 text-gray-500  -rotate-45 p-2 text-3xl rounded-full" />
          </div>

          <div className="mb-3 mt-2 flex justify-between items-center px-3">
            <div className="flex gap-x-2 items-center text-gray-500">
              <MdOutlineMapsHomeWork className="text-xl text-gray-500" />
              <span>24 people going</span>
            </div>

            <HiOutlineHeart className="text-purple-600 text-2xl" />
          </div>
        </div>

        {/* OverLap Small Card */}
        <div className="shadow-2xl border border-slate-200 flex gap-1 h-fit p-2 rounded-xl w-56 absolute -bottom-16 right-0  lg:right-2 lg:bottom-32 z-50 bg-white dark:bg-slate-900">
          <img src={Axum} className='size-8 rounded-full' alt="" />
          <div className="flex-1 mr-2">
            <p className="text-gray-500 text-sm font-semibold">Ongoing</p>
            <h1 className="font-bold mb-1">Axum monument</h1>
            <p className="text-sky-500 mb-1 text-sm">60% <span className="text-slate-800 dark:text-slate-400">completed</span></p>
            {/* Progress */}
            <div className="w-full h-2 bg-gray-200 rounded-xl">
              <div className="bg-sky-500 h-2 w-[60%] rounded-xl" />
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}
export default Features