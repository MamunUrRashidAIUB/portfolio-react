

const Button = ({ text, onClick, className }) => {
  return (
    <div className=" group-hover:opacity-100 absolute transform -translate-x-1/2 -translate-y-1/2">
      <button
        onClick={onClick}
        className={`px-5 py-2 relative rounded group overflow-hidden font-medium border border-cyan-400 bg-black text-cyan-400 inline-block ${className}`}
      >
        <span className="absolute top-0 left-0 flex w-0 h-full transition-all duration-700 ease-out transform group-hover:w-full bg-cyan-400 opacity-90"></span>
        <span className="relative group-hover:text-black">{text}</span>
      </button>
    </div>
  );
};

export default Button;
