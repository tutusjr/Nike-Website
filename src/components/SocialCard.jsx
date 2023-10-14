

const SocialCard = ({ src, alt }) => {
  return (
    <div className="flex justify-center items-center w-12 mb-10 h-12 bg-white rounded-full">
      <img
        src={src}
        alt={alt} width={24} height={24}/>
    </div>
  );
};

export default SocialCard;
