import { links, social } from "./data";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="w-screen px-10 md:px-40 py-5 shadow-xl md:flex md:flex-row md:justify-around content-center ">
      <button
        type="button"
        className="float-right text-2xl text-cyan-500 md:hidden hover:text-cyan-600 hover:-rotate-90 transform-gpu transition ease-in-out duration-300"
        onClick={toggleLinks}
      >
        <FaBars />
      </button>
      <div className="flex flex-row space-x-1 font-bold text-3xl">
        <h2 className="">Raphael </h2>
        <h2 className="text-cyan-500">Hawk</h2>
      </div>
      <div
        className={
          showLinks
            ? ` md:space-x-2 font-bold text-xl flex flex-col md:flex-row text-gray-400`
            : `md:space-x-2 font-bold text-xl md:flex-row text-white md:text-gray-400`
        }
      >
        {links.map((link) => {
          return (
            <a
              href={link.url}
              key={link.id}
              className="hover:text-cyan-500 hover:pl-2 my-2 md:my-0 md:hover:pl-0 hover:bg-cyan-100 md:hover:bg-transparent transition ease-in-out duration-300"
            >
              {link.text.charAt(0).toUpperCase() + link.text.slice(1)}
            </a>
          );
        })}
      </div>
      <div className="hidden md:flex md:flex-row md:space-x-2 md:text-cyan-500">
        {social.map((link) => {
          return (
            <a href={link.url} key={link.id}>
              {link.icon}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
