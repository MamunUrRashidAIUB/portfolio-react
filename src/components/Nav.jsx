import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="flex w-full items-center justify-between px-4">
      {/* Left Side - Your Name */}
      <div className="text-2xl font-bold text-white">RASHID</div>

      {/* Desktop Navigation */}
      <div className="hidden space-x-4 md:flex md:space-x-10 lg:space-x-20">
        <Link to="/" className="cursor-pointer hover:text-cyan-400">
          Home
        </Link>
        <Link to="/about" className="cursor-pointer hover:text-cyan-400">
          About
        </Link>
        <Link to="/projects" className="cursor-pointer hover:text-cyan-400">
          Projects
        </Link>
        <Link to="/skills" className="cursor-pointer hover:text-cyan-400">
          Skills
        </Link>
        <Link to="/contact" className="cursor-pointer hover:text-cyan-400">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleNavbar}
        className="md:hidden text-2xl text-white"
      >
        {isOpen ? "✕" : "|||"}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-16 left-0 w-full flex-col items-center bg-black py-4 text-white transition-all duration-700 ease-in-out md:hidden ${
          isOpen ? "flex opacity-100" : "hidden opacity-0"
        }`}
      >
        <Link to="/" className="cursor-pointer hover:text-cyan-400">
          Home
        </Link>
        <Link to="/about" className="cursor-pointer hover:text-cyan-400">
          About
        </Link>
        <Link to="/projects" className="cursor-pointer hover:text-cyan-400">
          Projects
        </Link>
        <Link to="/skills" className="cursor-pointer hover:text-cyan-400">
          Skills
        </Link>
        <Link to="/contact" className="cursor-pointer hover:text-cyan-400">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
