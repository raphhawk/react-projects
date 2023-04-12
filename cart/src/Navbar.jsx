import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { totalAmount } = useGlobalContext();
  return (
    <div className="flex flex-row items-center bg-indigo-700 text-white h-20 p-4 pl-10">
      <h2 className="grow md:mx-80 text-2xl">UseReducer</h2>
      <FaCartPlus className="mr-10 md:mr-80 lg:mr-80 text-4xl" />
      <div className="absolute right-12 top-2 md:right-80 rounded-full bg-indigo-400 w-6 h-6 text-center">
        {totalAmount}
      </div>
    </div>
  );
};

export default Navbar;
