const Button = ({
  label,
  iconURL,
  fullWidth
}) => {
  return (
    <button
      className={`flex justify-center group transition-colors items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${fullWidth && "w-full"} ${
        label === 'Learn more'
          ? ` text-slate-gray border-slate-gray hover:border-coral-red hover:bg-[#34105d] hover:text-white`
          : "bg-coral-red text-white border-coral-red hover:bg-white hover:text-coral-red"
      }`}
    >
      {label}

      {iconURL && (
  <img
    src={iconURL}
    alt="arrow right icon"
    className={`ml-2 rounded-full w-5 h-5 group-hover:border-coral-red ${label === "Learn more" ? "border border-slate-gray " : "group-hover:border group-hover:border-coral-red"}`}
    
  />
)}

    </button>
  );
};

export default Button;
