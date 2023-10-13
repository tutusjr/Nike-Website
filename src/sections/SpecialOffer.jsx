import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={678} className="object-contain w-full" alt="" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg">
         <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit eos mollitia quis ex assumenda, at porro temporibus ducimus sit illum dicta esse veniam unde corrupti nobis labore nisi aperiam placeat! Placeat similique consectetur corrupti!
        </p>
        <p className="mt-8 lg:max-w-lg info-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis hic harum at nemo, officia quisquam.
        </p>
        <div className="mt-11 flex flex-wrap gap-4 lg:max-w-lg">
        <Button label="Shop Now" iconURL={arrowRight}/>
        <Button label="Learn more"
        iconURL={arrowRight}/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer