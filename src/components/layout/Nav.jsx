import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="flex w-full items-center justify-between px-4">
      {/* Left Side - Your Name */}
      <div className="px-5 text-2xl font-bold text-cyan-300">
        {" "}
        <Link to="/">RASHID</Link>{" "}
      </div>

      {/* Desktop Navigation */}
      {/* Desktop Navigation */}
      <div className="hidden space-x-4 md:flex md:space-x-10 lg:space-x-20">
        <Link
          to="/"
          className="group relative cursor-pointer overflow-hidden px-2 py-1"
        >
          <span className="absolute inset-0 origin-left scale-x-0 transform bg-cyan-200 transition-all duration-300 ease-out group-hover:scale-x-100"></span>
          <span className="relative transition-colors duration-300 ease-out group-hover:text-black">
            Home
          </span>
        </Link>
        <Link
          to="/about"
          className="group relative cursor-pointer overflow-hidden px-2 py-1"
        >
          <span className="absolute inset-0 origin-left scale-x-0 transform bg-cyan-200 transition-all duration-300 ease-out group-hover:scale-x-100"></span>
          <span className="relative transition-colors duration-300 ease-out group-hover:text-black">
            About
          </span>
        </Link>
        <Link
          to="/projects"
          className="group relative cursor-pointer overflow-hidden px-2 py-1"
        >
          <span className="absolute inset-0 origin-left scale-x-0 transform bg-cyan-200 transition-all duration-300 ease-out group-hover:scale-x-100"></span>
          <span className="relative transition-colors duration-300 ease-out group-hover:text-black">
            Projects
          </span>
        </Link>
        <Link
          to="/skills"
          className="group relative cursor-pointer overflow-hidden px-2 py-1"
        >
          <span className="absolute inset-0 origin-left scale-x-0 transform bg-cyan-200 transition-all duration-300 ease-out group-hover:scale-x-100"></span>
          <span className="relative transition-colors duration-300 ease-out group-hover:text-black">
            Skills
          </span>
        </Link>
        <Link
          to="/contact"
          className="group relative cursor-pointer overflow-hidden px-2 py-1"
        >
          <span className="absolute inset-0 origin-left scale-x-0 transform bg-cyan-200 transition-all duration-300 ease-out group-hover:scale-x-100"></span>
          <span className="relative transition-colors duration-300 ease-out group-hover:text-black">
            Contact
          </span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleNavbar} className="text-2xl text-white md:hidden">
        {isOpen ? "✕" : "|||"}
      </button>

      {/* Mobile Navigation */}
      {/* Mobile Navigation */}
      <div
        className={`absolute left-0 top-16 flex h-screen w-1/2 flex-col items-center gap-5 bg-black py-4 text-white transition-transform duration-700 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link
          to="/"
          className="w-full cursor-pointer border-b-2 border-cyan-400 py-2 text-center hover:text-cyan-400"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="w-full cursor-pointer border-b-2 border-cyan-400 py-2 text-center hover:text-cyan-400"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="w-full cursor-pointer border-b-2 border-cyan-400 py-2 text-center hover:text-cyan-400"
        >
          Projects
        </Link>
        <Link
          to="/skills"
          className="w-full cursor-pointer border-b-2 border-cyan-400 py-2 text-center hover:text-cyan-400"
        >
          Skills
        </Link>
        <Link
          to="/contact"
          className="w-full cursor-pointer border-b-2 border-cyan-400 py-2 text-center hover:text-cyan-400"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
