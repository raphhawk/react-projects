import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="font-bold text-2xl">Oops! It's A Dead End</h2>
      <Link
        to="/"
        className="uppercase mt-5 text-white bg-[#7268A6] px-3 rounded-sm hover:bg-[#86A3C3]"
      >
        back home
      </Link>
    </div>
  );
};

export default Error;
