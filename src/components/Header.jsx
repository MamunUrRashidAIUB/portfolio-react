import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="bg-black sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-between text-white pl-4">
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
