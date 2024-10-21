

const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={ `relative border-2 border-cyan-400 bg-transparent py-2.5 px-5 font-medium uppercase text-white-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-slate-100 before:transition-transform before:duration-300 before:content-[''] hover:text-cyan-400 before:hover:scale-x-100 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
