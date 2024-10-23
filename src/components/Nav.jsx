import { useState } from "react";
const Nav = () => {

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the element
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  return (
    <div className="relative">
      <div className="hidden md:flex space-x-4 md:space-x-10 lg:space-x-20 pr-8  ">
        <a href="#home" onClick={() => scrollToSection('home')} className="hover:text-cyan-400">Home</a>
        <a href="#about"className="hover:text-cyan-400">About</a>
        <a href="#projects"className="hover:text-cyan-400">Projects</a>
        <a href="#blogs"className="hover:text-cyan-400">Blogs</a>
        <a href="#contact"className="hover:text-cyan-400">Contact</a>
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
        <a href="#home"className="hover:text-cyan-400">Home</a>
        <a href="#about"className="hover:text-cyan-400">About</a>
        <a href="#projects"className="hover:text-cyan-400">Projects</a>
        <a href="#blogs"className="hover:text-cyan-400">Blogs</a>
        <a href="#contact"className="hover:text-cyan-400">Contact</a>
      </div>
    </div>
  );
};
export default Nav;
