import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className=" flex flex-col justify-center items-center border-t-2 py-7 border-b-2 rounded-2xl border-coral-red">
      <img
        src={imgURL}
        alt="Customer"
        className="w-[150px] h-[150px] object-cover rounded-full"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} width={24} height={24} className="object-contain m-0" alt="" />
        <p className="text-xl font-montserrat text-start-gray">{rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
