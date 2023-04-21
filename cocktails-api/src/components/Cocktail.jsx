import { Link } from "react-router-dom";

const Cocktail = ({ drink }) => {
  return (
    <article>
      <div className="border m-3 shadow-md p-3">
        <img
          src={drink.image}
          alt={drink.name}
          className="p-3 rounded-full w-40 drop-shadow-2xl"
        />
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold">{drink.name}</h3>
          <h3 className="font-bold">{drink.glass}</h3>
          <p className="text-gray-500">{drink.info}</p>
          <Link
            to={`/cocktail/${drink.id}`}
            className="bg-[#86A3C3] px-3 text-white rounded-md hover:bg-[#B6CEC7] capitalize"
          >
            details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Cocktail;
