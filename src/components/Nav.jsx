import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <div className="hidden md:flex space-x-4 md:space-x-10 lg:space-x-20 pr-8">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#blogs">Blogs</a>
        <a href="#contact">Contact</a>
      </div>
      <button
        onClick={toggleNavbar}
        className="text-white text-2xl pt-4 pr-4 flex md:hidden items-center justify-end w-full"
      >
        {isOpen ? "✕" : "|||"}
      </button>
      <div
        className={`md:hidden flex basis-full flex-col items-center space-y-4 text-white p-4 transition-all duration-700 ease-in-out transform ${
          isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
        }`}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#blogs">Blogs</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Nav;
