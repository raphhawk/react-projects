import { useGlobalContext } from "./context";
import { MdDarkMode } from "react-icons/md";
import { BsFillBrightnessHighFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="relative p-4">
      <button
        type="button"
        className="text-3xl absolute right-20 md:right-40"
        onClick={toggleDarkTheme}
      >
        {isDarkTheme ? (
          <BsFillBrightnessHighFill className="text-white" />
        ) : (
          <MdDarkMode />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
