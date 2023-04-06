import { links, social } from "./data";
import { RxCross2 } from "react-icons/rx";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { closeSidebar } = useGlobalContext();
  return (
    <nav className="z-4 fixed top-0 left-0 border h-screen w-96">
      <button
        type="button"
        className="float-right m-6 p-1 rounded-md text-2xl text-white bg-red-400 hover:bg-red-600 transform ease-in-out duration-300"
        onClick={closeSidebar}
      >
        <RxCross2 />
      </button>
      <div className="flex flex-row text-3xl p-10 font-bold space-x-2">
        <p>Raphel</p>
        <p className="text-cyan-500">Hawk</p>
      </div>
      <div className="">
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.url}
                  className="flex flex-row capitalize text-2xl px-10 py-3 text-gray-700 hover:text-cyan-500 hover:bg-gray-200 transform ease-in-out duration-300 space-x-3"
                >
                  <p>{link.icon}</p>
                  <p>{link.text}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul className="flex flex-row space-x-4 text-2xl text-cyan-500 absolute inset-x-0 bottom-0 w-80 mx-20">
          {social.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>
                  <p>{link.icon}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
