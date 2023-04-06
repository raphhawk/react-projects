import { useGlobalContext } from "./context";
import { GiHamburgerMenu } from "react-icons/gi";

const Home = () => {
  const { sidebar, openSidebar, openModal } = useGlobalContext();
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        type="button"
        className="z-2 text-5xl text-cyan-500 hover:text-cyan-600 fixed top-10 left-10"
        onClick={openSidebar}
      >
        {!sidebar && <GiHamburgerMenu />}
      </button>
      <button
        type="button"
        className="text-2xl bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        onClick={openModal}
      >
        Show Modal
      </button>
    </div>
  );
};

export default Home;
