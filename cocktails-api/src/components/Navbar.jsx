import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between capitalize py-5 bg-[#B6CEC7]">
      <Link to="/">
        <h2 className="flex flex-row text-xl pl-20 md:pl-40 font-serif font-bold tracking-wider hover:text-white">
          TheCocktail <p className="font-thin">DB</p>
        </h2>
      </Link>
      <ul className="flex text-center pr-20 md:pr-40  flex-row font-bold">
        <li className="mr-3 hover:text-gray-500">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-gray-500">
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
