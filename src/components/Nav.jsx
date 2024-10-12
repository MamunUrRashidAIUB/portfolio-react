import  { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglenavbar = () => setIsOpen(!isOpen);
  return (
    <div className="">
      <div className="flex space-x-4 md:space-x-10 lg:space-x-20 pr-6 md:flex hidden ">
        <a href="home"> Home</a>
        <a href="about">About</a>
        <a href="projects">Projects </a>
        <a href="blogs"> Blogs</a>
        <a href="contact"> Contact</a>
      </div>
      <div className="md:hidden pr-6">
        <button onClick={togglenavbar}>{isOpen ? "X" :"|||"}</button>
      </div>

{isOpen && ( <div className="md:hidden flex flex-col space-y-4 bg-black text-white p-4 translate-x-0">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
        </div>)}


    </div>
  );
};

export default Nav;
