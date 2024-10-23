import { useState } from "react";

const Nav = () => {

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-4 md:space-x-10 lg:space-x-20 pr-8">
        <a onClick={() => scrollToSection('home')} className="cursor-pointer hover:text-cyan-400">Home</a>
        <a onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-cyan-400">About</a>
        <a onClick={() => scrollToSection('projects')} className="cursor-pointer hover:text-cyan-400">Projects</a>
        <a onClick={() => scrollToSection('blogs')} className="cursor-pointer hover:text-cyan-400">Blogs</a>
        <a onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-cyan-400">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleNavbar}
        className="text-white text-2xl pt-4 pr-4 flex md:hidden items-center justify-end w-full"
      >
        {isOpen ? "✕" : "|||"}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden flex basis-full flex-col items-center space-y-4 text-white p-4 transition-all duration-700 ease-in-out transform ${
          isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
        }`}
      >
        <a onClick={() => { scrollToSection('home'); toggleNavbar(); }} className="cursor-pointer hover:text-cyan-400">Home</a>
        <a onClick={() => { scrollToSection('about'); toggleNavbar(); }} className="cursor-pointer hover:text-cyan-400">About</a>
        <a onClick={() => { scrollToSection('projects'); toggleNavbar(); }} className="cursor-pointer hover:text-cyan-400">Projects</a>
        <a onClick={() => { scrollToSection('blogs'); toggleNavbar(); }} className="cursor-pointer hover:text-cyan-400">Blogs</a>
        <a onClick={() => { scrollToSection('contact'); toggleNavbar(); }} className="cursor-pointer hover:text-cyan-400">Contact</a>
      </div>
    </div>
  );
};

export default Nav;
