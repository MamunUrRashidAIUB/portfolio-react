import Nav from "./Nav";

const Header = () => {
  return (
    <header className="sticky top-0 z-[20] mx-auto flex w-full flex-wrap items-center justify-between bg-black py-5 pl-4 font-bold text-white">
      <Nav />
    </header>
  );
};

export default Header;
