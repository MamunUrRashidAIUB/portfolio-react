const Button = ({ text, onClick, className }) => {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 transform group-hover:opacity-100">
      <button
        onClick={onClick}
        className={`group relative inline-block overflow-hidden rounded border border-cyan-400 bg-black px-5 py-2 font-medium text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${className}`}
      >
        <span className="absolute left-0 top-0 flex h-full w-0 transform bg-cyan-400 opacity-90 transition-all duration-700 ease-out group-hover:w-full"></span>
        <span className="relative group-hover:text-black">{text}</span>
      </button>
    </div>
  );
};

export default Button;
