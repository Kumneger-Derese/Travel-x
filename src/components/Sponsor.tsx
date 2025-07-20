import { sponsorImages } from "../assets/sponsor/sponsor"

const Sponsor = () => {
  return (
    <div className="my-24 sm:mx-32 flex flex-wrap justify-between items-center">
      {
        sponsorImages.map((image) => (
          <img src={image} alt={image} className="size-8 sm:size-16" />
        ))
      }
    </div>
  )
}
export default Sponsor