import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red"> Super</span> <span className="text-coral-red">
            Quality
          </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, fugiat nesciunt. Repellat ut ad fuga iusto consequatur illum fugit est aliquid maxime officiis. Alias, natus.
        </p>
        <p className="mt-8 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, quaerat.
        </p>
        <div className="mt-11 lg:max-w-lg">
        <Button label="View details"/>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img className="object-contain" src={shoe8} alt="shoe8" width={570} height={522}/>
        </div>
    </section>
  );
};

export default SuperQuality;
